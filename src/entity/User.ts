import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn
} from "typeorm";
import {Post} from "./Post";
import {Comment} from "./Comment";
import {getDatabaseConnection} from "../utils";
import md5 from "md5";
import _ from "lodash";

type errors = {
    username?: string [],
    password?: string [],
    passwordConfirmation?: string [],
}

@Entity('users')
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    username: string;

    @Column('varchar')
    password: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    // 一个用户 对应多个post（文章）
    @OneToMany(() => Post, post => post.author)
    posts: Post[];


    // 一个用户对应多一个评论
    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[];

    constructor(username: string, password: string, passwordConfirmation) {
        this.username = username;
        this.password = password;
        this.passwordOrigin = password;
        this.passwordConfirmation = passwordConfirmation;
    }

    errors: errors = { username: [], password: [], passwordConfirmation: []};

    passwordConfirmation: string;

    passwordOrigin: string;

    async validate() {
        const { username, passwordOrigin, passwordConfirmation } = this;
        if (!username || !passwordOrigin || !passwordConfirmation) {
            this.errors.username.push('username or password cant be null');
        }
        if (passwordOrigin !== passwordConfirmation) {
            this.errors.password.push('the password is different');
            return;
        }
        const connection = await getDatabaseConnection();
            // console.log(connection)
        const userList = await connection.manager.find(User, { username });
        if (userList.length > 0) {
            this.errors.username.push('username is already register');
        }
    }
    hasErrors() {
        return !!Object.values(this.errors).find(v => v.length > 0)
    }

    @BeforeInsert()
    generatePasswordDigest() {
        this.password = md5(this.passwordOrigin);
    }

    toJSON() {
       return _.omit(this, ['password', 'passwordOrigin', 'passwordConfirmation'])
    }
}
