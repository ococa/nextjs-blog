import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Users} from "./Users";
import {Comments} from "./Comments";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    title: string;

    @Column('text')
    content: string;


    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updateAt: Date;

    // 多个文章对应一个user
    @ManyToOne(() => Users, user => user.posts)
    author_id: Users;

    // 一个post 对应多个 comment
    @OneToMany(type => Comments, (comment) => comment.post_id)
    comment: Comments;

}
