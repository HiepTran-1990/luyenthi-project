import { defineConfig } from 'astro/config';

export default defineConfig({
  // Khi deploy lên Cloudflare Pages, sửa site thành domain thật của bạn
  // (giống cách kysumep.com đang trỏ về Cloudflare Pages)
  output: 'static',
});
