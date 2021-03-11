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

@Entity()
export class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    title: string;

    @Column('text')
    content: string;

    @Column('int')
    author_id: number;

    @CreateDateColumn('time')
    createAt: Date;

    @UpdateDateColumn('time')
    updateAt: Date;

    // 多个文章对应一个user
    @ManyToOne(() => Users, user => user.posts)
    user: Users;

    // 一个post 对应多个 comment
    @OneToMany(type => Comments, (comment) => comment.post_id)
    comment: Comments;

}
