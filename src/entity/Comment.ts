import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    content: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    // 多个评论comments 对应一个用户
    @ManyToOne('User', 'comments')
    user: User;

    // 多个评论对应一个文章
    @ManyToOne('Post', 'comments')
    post: Post;
}
