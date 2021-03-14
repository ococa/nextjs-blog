import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "./User";
import {Comment} from "./Comment";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    title: string;

    @Column('text')
    content: string;

    // 多个文章对应一个user
    @ManyToOne('User', 'posts')
    author: User;

    // 一个post 对应多个 comment
    @OneToMany('Comment', 'post')
    comments: Comment[];


    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updateAt: Date;
}
