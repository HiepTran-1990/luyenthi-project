import { defineCollection, z } from 'astro:content';

const cauhoi = defineCollection({
  type: 'content',
  schema: z.object({
    de_thi: z.enum(['ielts', 'toeic']),
    ky_nang: z.enum(['listening', 'reading', 'grammar']),
    do_kho: z.enum(['de', 'trungbinh', 'kho']),
    cau_hoi: z.string(),
    // 2-4 lựa chọn: MCQ thường dùng 4, True/False/Not Given dùng 3
    lua_chon: z.array(z.string()).min(2).max(4),
    dap_an_dung: z.number().min(0).max(3), // chỉ số 0=A, 1=B, 2=C...
    giai_thich: z.string().optional(),
    // Slug của bài đọc liên quan (để trống = câu hỏi độc lập, vd TOEIC Part 5)
    bai_doc: z.string().optional(),
    // Slug của bài học ngữ pháp liên quan (để trống = không thuộc bài học nào)
    bai_hoc_ngu_phap: z.string().optional(),
    // Slug của bài nghe liên quan (để trống = không thuộc bài nghe nào)
    bai_nghe: z.string().optional(),
  }),
});

const baidoc = defineCollection({
  type: 'content',
  schema: z.object({
    de_thi: z.enum(['ielts', 'toeic']),
    tieu_de: z.string(),
    do_kho: z.enum(['de', 'trungbinh', 'kho']),
  }),
});

const nguphap = defineCollection({
  type: 'content',
  schema: z.object({
    tieu_de: z.string(),
    do_kho: z.enum(['de', 'trungbinh', 'kho']),
  }),
});

const bainghe = defineCollection({
  type: 'content',
  schema: z.object({
    de_thi: z.enum(['ielts', 'toeic']),
    tieu_de: z.string(),
    do_kho: z.enum(['de', 'trungbinh', 'kho']),
  }),
});

export const collections = { cauhoi, baidoc, nguphap, bainghe };
