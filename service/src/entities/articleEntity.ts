import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Articles {
    @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  category!: string;
 
  @Column()
  title!: string;
 
  @Column()
  inhalt!: string;
}