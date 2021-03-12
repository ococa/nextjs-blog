import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn} from "typeorm";
import {Post} from "./Post";
import {Comment} from "./Comment";

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

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password
    }

}