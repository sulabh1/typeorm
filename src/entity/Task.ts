import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 80 })
    title: string

    @Column({ length: 300 })
    description: string

    @ManyToMany(type => User, user => user.tasks)
    user: Promise<User[]>

}