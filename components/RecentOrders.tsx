// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"

// const invoices = [
//     {
//         invoice: "INV001",
//         paymentStatus: "Paid",
//         totalAmount: "$250.00",
//         paymentMethod: "Credit Card",
//     },
//     {
//         invoice: "INV002",
//         paymentStatus: "Pending",
//         totalAmount: "$150.00",
//         paymentMethod: "PayPal",
//     },
//     {
//         invoice: "INV003",
//         paymentStatus: "Unpaid",
//         totalAmount: "$350.00",
//         paymentMethod: "Bank Transfer",
//     },
//     {
//         invoice: "INV004",
//         paymentStatus: "Paid",
//         totalAmount: "$450.00",
//         paymentMethod: "Credit Card",
//     },
//     {
//         invoice: "INV005",
//         paymentStatus: "Paid",
//         totalAmount: "$550.00",
//         paymentMethod: "PayPal",
//     },
//     {
//         invoice: "INV006",
//         paymentStatus: "Pending",
//         totalAmount: "$200.00",
//         paymentMethod: "Bank Transfer",
//     },
//     {
//         invoice: "INV007",
//         paymentStatus: "Unpaid",
//         totalAmount: "$300.00",
//         paymentMethod: "Credit Card",
//     },
// ]

// export function RecentOrders() {
//     return (
//         <div className="p-5" >
//             <Table className="bg-dark-500 rounded-xl ">
//                 {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead className="w-[100px]">Invoice</TableHead>
//                         <TableHead>Status</TableHead>
//                         <TableHead>Method</TableHead>
//                         <TableHead className="text-right">Amount</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {invoices.map((invoice) => (
//                         <TableRow key={invoice.invoice}>
//                             <TableCell className="font-medium">{invoice.invoice}</TableCell>
//                             <TableCell>{invoice.paymentStatus}</TableCell>
//                             <TableCell>{invoice.paymentMethod}</TableCell>
//                             <TableCell className="text-right">{invoice.totalAmount}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//                 <TableFooter>
//                     <TableRow>
//                         <TableCell colSpan={3}>Total</TableCell>
//                         <TableCell className="text-right">$2,500.00</TableCell>
//                     </TableRow>
//                 </TableFooter>
//             </Table>
//         </div>
//     )
// }

import { recentOrders } from "@/constants";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableCaption,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export function RecentOrders() {
    return (
        <div className="">
            <Table className="bg-[#202028] rounded-xl">
                {/* <TableCaption>A list of your recent orders.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Order No</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentOrders.map((order) => (
                        <TableRow key={order.orderNo}>
                            <TableCell className="font-medium">{order.customer}</TableCell>
                            <TableCell>{order.orderNo}</TableCell>
                            <TableCell className="">{order.amount}</TableCell>
                            <TableCell className=''>
                                <p className={`px-2 py-[2px] inline rounded-full text-white ${order.status === "Delivered" ? "bg-green-500" :
                                    order.status === "Pending" ? "bg-blue-500" :
                                        "bg-red-500"
                                    }`}>
                                    {order.status}
                                </p>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
