import { type } from "os";
import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique} from "typeorm";
import { Role } from "./role.entity";

@Entity('people')
@Unique(["NationalCode"])
export class person extends BaseEntity {
@PrimaryGeneratedColumn()
Id:number;

 @Column()
 Name:string;

 @Column()
 LastName:string;

 @Column()
 NationalCode:string; 

 @ManyToOne(() => Role, (role) => role.people)
 Role:Role;

}
