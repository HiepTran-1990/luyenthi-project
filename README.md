# Luyện thi IELTS · TOEIC — bản MVP

Dự án này dùng đúng stack bạn đã quen với kysumep.com: **Astro + Sveltia CMS + Cloudflare Pages + GitHub**.
Khác biệt duy nhất: có thêm một trang `/quiz` chấm điểm và lưu XP/streak bằng `localStorage` của trình duyệt
(chưa cần tài khoản người dùng, chưa cần backend).

## 1. Chạy thử trên máy tính của bạn

Cần cài Node.js trước (nếu máy chưa có, tải tại nodejs.org — bản LTS).

```bash
cd luyenthi-project
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ hiện lên trong terminal (thường là `http://localhost:4321`).
Vào trang chủ → bấm "Bắt đầu làm đề thử" → làm hết 8 câu → xem điểm + XP + streak được cộng.
Làm lại lần 2 trong cùng ngày để kiểm tra: streak **không** tăng thêm (đúng logic — mỗi ngày chỉ tính 1 lần).

## 2. Đẩy lên GitHub

Giống hệt cách bạn tạo repo "kysumep":

```bash
git init
git add .
git commit -m "Khởi tạo dự án luyện thi IELTS/TOEIC"
git branch -M main
git remote add origin https://github.com/HiepTran-1990/luyenthi-project.git
git push -u origin main
```

(Tạo repo trống tên `luyenthi-project` trên GitHub trước khi chạy `git push`, hoặc đổi tên khác tùy bạn —
nếu đổi tên, nhớ sửa lại dòng `repo:` trong `public/admin/config.yml` cho khớp.)

## 3. Deploy lên Cloudflare Pages

Kết nối repo GitHub mới này với Cloudflare Pages, giống cách bạn đã làm với kysumep:
- Build command: `npm run build`
- Output directory: `dist`

## 4. Kết nối Sveltia CMS (trang /admin)

Đây là bước duy nhất **mình chưa chắc chắn 100%** vì không biết chi tiết bạn đã cấu hình OAuth
(GitHub OAuth App hay Cloudflare Worker proxy) cho kysumep như thế nào. Nếu bạn đang dùng chung
một OAuth App/proxy cho nhiều site, thường chỉ cần thêm domain mới của site này vào danh sách
redirect URI được phép, rồi trỏ `config.yml` (đã có sẵn trong dự án) về đúng repo mới.
Nếu bạn cho mình biết cách bạn đã cấu hình phần này cho kysumep, mình sẽ hướng dẫn cụ thể hơn.

## 5. Thêm câu hỏi mới

Vào `<domain-của-bạn>/admin` → collection "Ngân hàng câu hỏi" → thêm entry mới,
điền đề thi/kỹ năng/độ khó/câu hỏi/4 lựa chọn/đáp án đúng/giải thích — y hệt thao tác bạn
đang làm khi thêm tài liệu MEP vào kysumep, chỉ khác các trường dữ liệu.

## Những gì CHƯA có trong bản MVP này (làm ở giai đoạn sau)

- Chấm Writing/Speaking bằng AI (cần gọi API từ phía server, không thể làm ở site tĩnh)
- Tài khoản người dùng, lưu điểm nhiều thiết bị (cần Supabase hoặc tương đương)
- Bảng xếp hạng, thách đấu bạn bè (cần dữ liệu tổng hợp nhiều người dùng)
- Câu hỏi Listening có audio thật (5 câu mẫu hiện tại đều là dạng đọc)

Đây là những gì để dành cho các lần lặp sau, sau khi bạn đã thử nghiệm xong bản MVP này.
