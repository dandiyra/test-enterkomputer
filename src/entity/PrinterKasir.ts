import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { User } from "./User";
import { Produk } from "./Produk";
import { Table } from "./Table";

@Entity()

export class PrinterKasir extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;
    
    @Column()
    product_id: number;
   
    @Column()
    table_id: number;
   
    @Column()
    quantity: number;
    
    @Column()
    price: number;
   
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
    
    @Column({ type: "timestamp", default : null})
    deleted_at?: string;

    @ManyToOne(type => User, user => user.kasir)
    @JoinColumn({name: 'user_id'})
    user!: User
    
    @ManyToOne(type => Produk, produk => produk.kasir)
    @JoinColumn({name: 'product_id'})
    produk!: Produk
    
    @ManyToOne(type => Table, table => table.kasir)
    @JoinColumn({name: 'table_id'})
    table!: Table
}
