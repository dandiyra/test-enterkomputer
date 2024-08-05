import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { User } from "./User";
import { Produk } from "./Produk";
import { Table } from "./Table";

@Entity()

export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;
    
    @Column()
    product_id: number;
   
    @Column()
    table_id: number;
   
    @Column()
    price: number;
    
    @Column()
    quantity: number;
   
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
    
    @Column({ type: "timestamp", default : null})
    deleted_at?: string;

    @ManyToOne(type => User, user => user.order)
    @JoinColumn({name: 'user_id'})
    user!: User
    
    @ManyToOne(type => Produk, produk => produk.order)
    @JoinColumn({name: 'product_id'})
    produk!: Produk
    
    @ManyToOne(type => Table, table => table.order)
    @JoinColumn({name: 'table_id'})
    table!: Table
}
