import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToMany
} from "typeorm";
import { Order } from "./Order";
import { PrinterKasir } from "./PrinterKasir";

@Entity()

export class Produk extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;
    
    @Column()
    quantity: number;
   
    @Column()
    price: number;
   
    @Column()
    category: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
    
    @Column({ type: "timestamp", default : null})
    deleted_at?: string;

    @OneToMany(type => Order, order => order.produk)
    order!: Order[];
    
    @OneToMany(type => PrinterKasir, kasir => kasir.produk)
    kasir!: PrinterKasir[];
}
