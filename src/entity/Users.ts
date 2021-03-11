import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Post} from "./Post";
import {Comments} from "./Comments";

@Entity('users')
export class Users {

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
    @OneToMany(() => Post, post => post.author_id)
    posts: Post[];


    // 一个用户对应多一个评论
    @OneToMany(() => Comments, comment => comment.user_id)
    comments: Comments[];
}
