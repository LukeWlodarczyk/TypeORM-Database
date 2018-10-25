import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "bool", default: false })
  confirmed: boolean;

  @Column({ type: "varchar", length: 30 })
  firstName: string;

  @Column({ type: "varchar", length: 30 })
  lastName: string;

  @Column() age: number;
}
