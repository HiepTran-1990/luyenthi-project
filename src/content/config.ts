import { defineCollection, z } from 'astro:content';

const cauhoi = defineCollection({
  type: 'content',
  schema: z.object({
    de_thi: z.enum(['ielts', 'toeic']),
    ky_nang: z.enum(['listening', 'reading', 'grammar']),
    do_kho: z.enum(['de', 'trungbinh', 'kho']),
    cau_hoi: z.string(),
    lua_chon: z.array(z.string()).length(4),
    dap_an_dung: z.number().min(0).max(3), // chỉ số 0=A, 1=B, 2=C, 3=D
    giai_thich: z.string().optional(),
  }),
});

export const collections = { cauhoi };
