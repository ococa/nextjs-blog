import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Users} from "./Users";
import {Post} from "./Post";

@Entity('comments')
export class Comments {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    content: string;

    // @Column('int')
    // user_id: Users;

    // @Column('int')
    // post_id: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    // 多个评论comments 对应一个用户
    @ManyToOne(() => Users, user => user.comments)
    user: Users;

    // 多个评论对应一个文章
    @ManyToOne(() => Post, post => post.comments)
    post: Post;
}
