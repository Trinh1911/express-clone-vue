import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// event là đối tượng chứa thông tin về yêu cầu đến bao gồm 
// dữ liệu từ người dùng
export default defineEventHandler(async (event)=> {
    let items = await prisma.products.findMany({
        // giới hạn kết quả trả về là 5 mục đầu tiên
        take: 5,
        where: {
            // kiểm tra trường title
            title: {
                // lấy thông tin truy vấn 
                contains: event.context.params.id,
                // tìm kiếm không phân biệt chứ hoa chữ thường
                mode: 'insensitive'
            }
        }
    })
    return items
})