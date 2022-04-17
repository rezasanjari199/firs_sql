import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { person } from "./person.entity";

@Entity('Roles')
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id:number;
    
    @Column()
    Name:string;

    @OneToMany(() => person, (person) => person.Role)
    people:person[];
}
