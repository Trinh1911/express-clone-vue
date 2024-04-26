import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  let orders = await prisma.orders.findMany({
    where: { userId: event.context.params.userId },
    // sắp xếp kết quả theo thứ tự giảm dần
    orderBy: { id: "desc" },
    // truy vấn thông tin từ bảng liên kết là orderItem
    include: {
      orderItem: {
        // truy vấn thông tin từ bảng liên kết product
        include: {
          // product: true nghĩa là lấy toàn bộ thông tin về sản phẩm b
          product: true,
        },
      },
    },
  });
  return orders;
});
