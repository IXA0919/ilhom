# Plov City — Vercel uchun tayyor loyiha

Bu papka React saytining to‘liq manbasi va avvalgi `plov-city` saytidagi noyob menyu taomlari birlashtirilgan varianti. Admin panel, savat, filiallar, tarjimalar, menyu rasmlari hamda eski saytdan olingan mahsulotlar saqlangan.

## Vercel’ga joylash

1. Ushbu papkani GitHub’ga yuklang yoki Vercel’da **Add New → Project** orqali import qiling.
2. Root Directory: loyiha papkasi. Build Command: `npm run build`. Output Directory: `dist`.
3. Vercel loyihasining **Storage → Create Database** bo‘limidan Upstash Redis yarating va loyihaga ulang. Redis env qiymatlari Vercel tomonidan beriladi.
4. **Settings → Environment Variables** ga quyidagilarni kiriting:
   - `ADMIN_USERNAME` = `owner`
   - `ADMIN_PASSWORD` = `admin123`
   - `ADMIN_SESSION_SECRET` = kamida 32 belgili tasodifiy maxfiy qiymat
   - Telegram buyurtmalari uchun `TELEGRAM_BOT_TOKEN` va `TELEGRAM_CHAT_ID`
5. Saqlagandan so‘ng **Redeploy** qiling. Admin paneldagi kirish: `owner` / `admin123`. Parolni paneldagi Xavfsizlik bo‘limida o‘zgartirishingiz mumkin.

Redis sayt menyusi, buyurtmalar va tashriflarni barcha foydalanuvchilar uchun umumiy saqlaydi. Redis ulanmaganida admin panelga kirish va umumiy saqlash ishlamaydi; avval Storage’da bazani ulang, so‘ng redeploy qiling. Parol yoki maxfiy kalitni frontend `VITE_` o‘zgaruvchisiga qo‘ymang.

## Mahalliy ishlab chiqish

Node.js o‘rnatilgan bo‘lsa, terminalda `npm install` va `npm run dev` ishlating. Vercel API’ni ham mahalliy tekshirish uchun Vercel CLI hamda `.env.local` dagi server o‘zgaruvchilari kerak bo‘ladi. `.env.local` ni ommaga yuklamang.
