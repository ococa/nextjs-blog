import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Users} from "./Users";
import {Post} from "./Post";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    content: string;

    @Column('int')
    user_id: number;

    @Column('int')
    post_id: number;

    @CreateDateColumn('time')
    createAt: Date;

    @UpdateDateColumn('time')
    updateAt: Date;

    // 多个评论comments 对应一个用户
    @ManyToOne(() => Users, user => user.comments)
    user: Users;

    // 多个评论对应一个文章
    @ManyToOne(() => Post, post => post.comment)
    post: Post;
}
