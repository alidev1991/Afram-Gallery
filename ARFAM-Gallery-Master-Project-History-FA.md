# سند جامع تاریخچه و نقشه راه پروژه ARFAM Gallery

> **نقش این سند:** مرجع اصلی و زنده پروژه نرم‌افزاری ARFAM Gallery\
> **وضعیت:** این سند باید در پایان هر فاز توسعه به‌روزرسانی شود.\
> **آخرین به‌روزرسانی:** ۱۴۰۵/۰۷/۰۹ --- تکمیل و تأیید Phase 10\
> **توسعه‌دهنده پروژه:** Ali Asadpour\
> **کارفرما:** امید --- ARFAM Gallery\
> **مخزن رسمی GitHub:**
> `https://github.com/alidev1991/Afram-Gallery.git`\
> **مسیر محلی پروژه:** `E:\Projects\Arfam-Gallery`

------------------------------------------------------------------------

## 1. هدف این سند

این فایل، تاریخچه دائمی و مرجع فنی و تجاری پروژه ARFAM Gallery است.

در هر مرحله از پروژه باید بتوان با خواندن این سند به سؤال‌های زیر پاسخ
داد:

-   پروژه ARFAM Gallery چیست؟
-   هدف نهایی پروژه چیست؟
-   امید چه خواسته‌هایی دارد؟
-   چه تصمیم‌هایی قطعی و قفل شده‌اند؟
-   از چه تکنولوژی‌هایی استفاده می‌کنیم؟
-   تا امروز چه کارهایی انجام شده؟
-   چه بخش‌هایی توسط کاربر یا کارفرما تأیید شده؟
-   چه کارهایی هنوز باقی مانده؟
-   چه قوانین تجاری نباید فراموش شوند؟
-   در هر Phase دقیقاً چه اتفاقی افتاده؟
-   وضعیت Git، دیتابیس و استقرار چیست؟
-   قدم بعدی پروژه چیست؟

### قانون به‌روزرسانی سند

**در پایان هر Phase، قبل از بسته شدن کامل آن Phase، این فایل باید
به‌روزرسانی شود.**

حداقل موارد زیر باید برای هر فاز ثبت شوند:

1.  شماره و نام Phase
2.  هدف Phase
3.  کارهای انجام‌شده
4.  فایل‌ها و قابلیت‌های مهم اضافه یا تغییرکرده
5.  تصمیمات معماری و تجاری
6.  نتیجه QA
7.  Commit Message و Commit Hash پس از تأیید
8.  وضعیت Push
9.  مشکلات شناخته‌شده و تصمیمات عقب‌افتاده
10. تأثیر آن Phase بر مراحل بعدی

تاریخچه نباید پاک یا بازنویسی شود. اگر تصمیمی در آینده تغییر کرد، تصمیم
قبلی حفظ شود و تصمیم جدید همراه با تاریخ/Phase ثبت گردد.

------------------------------------------------------------------------

# 2. معرفی پروژه

## 2.1 ARFAM Gallery چیست؟

ARFAM Gallery یک گالری دیجیتال لوکس و فروشگاه اینترنتی برای محصولات
دکوراتیو، اکسسوری و لوازم لوکس منزل است.

هدف پروژه فقط ساخت یک فروشگاه اینترنتی معمولی نیست. سایت باید قبل از هر
چیز حس برند لوکس ARFAM را منتقل کند و سپس امکانات فروشگاهی را در اختیار
مشتری قرار دهد.

اصل اصلی طراحی:

> **اول تجربه برند لوکس --- سپس فروشگاه اینترنتی**

سایت نهایی باید شامل این بخش‌ها باشد:

-   معرفی لوکس برند
-   نمایش محصولات
-   دسته‌بندی محصولات
-   کالکشن‌ها
-   صفحه جزئیات محصول
-   ثبت‌نام و ورود مشتری
-   سبد خرید
-   Checkout
-   سفارش‌ها
-   پرداخت
-   فاکتور رسمی ARFAM
-   کیف پول مشتری
-   بخش VIP
-   مجله آرفام
-   مدیریت مشتریان
-   مدیریت محصولات
-   گزارش‌گیری
-   SMS
-   پنل مدیریت اختصاصی

------------------------------------------------------------------------

# 3. کارفرما و برند

## 3.1 کارفرما

-   کارفرما: **امید**
-   برند: **ARFAM Gallery**
-   اینستاگرام: `@arfam_gallery`
-   لوگوی رسمی ARFAM توسط خود امید طراحی/ارائه شده است.
-   لوگو نباید بدون درخواست صریح امید دوباره طراحی شود.

## 3.2 جایگاه برند

ARFAM روی محصولات دکوراتیو و لوکس تمرکز دارد، از جمله:

-   اکسسوری دکوری
-   مجسمه و آبجکت
-   ساعت
-   سرویس پذیرایی
-   دیوارکوب هنری
-   شمعدان
-   نور و روشنایی
-   گلدان و گل دکوراتیو
-   میز و کنسول
-   آثار هنری

بخشی از محصولات مستقیماً توسط ARFAM طراحی و تولید می‌شوند و بخشی دیگر
محصولات منتخب و Curated هستند.

تعریف لوکس بودن در ARFAM بر این موارد استوار است:

-   تناسب
-   کیفیت متریال
-   کیفیت ساخت
-   دقت
-   جزئیات
-   ارزش ماندگار

لوکس بودن نباید به شکل تجمل بی‌دلیل و شلوغی بصری نمایش داده شود.

## 3.3 متن رسمی «درباره آرفام»

متن زیر مستقیماً از کارفرما دریافت شده و Source of Truth است:

> جهان آرفام، فراتر از یک انتخاب
>
> آرفام گالری با تمرکز بر اکسسوری‌های دکوراتیو، ساعت‌های دیواری، سرویس
> پذیرایی، دیوارکوبهای هنری و .. نگاهی دقیق به آنچه یک فضا را تعریف
> می‌کند دارد؛ از تناسب فرم و متریال تا کیفیت ساخت و ظرافت جزئیات.
>
> بخشی از محصولات آرفام، حاصل طراحی و تولید مستقیم مجموعه است؛ رویکردی
> که امکان توجه دقیق‌تر به کیفیت اجرا، پرداخت نهایی و جزئیات محصول را
> فراهم می‌کند. در کنار آن، مجموعه‌ای از اکسسوری‌های منتخب را گرد هم
> آورده‌ایم تا هر محصول، فارغ از اندازه و کاربردش، با زبان بصری فضای شما
> هماهنگ باشد.
>
> ما به لوکس بودن به‌عنوان یک نمایش پرزرق‌ و برق نگاه نمی‌کنیم. برای ما،
> لوکس بودن در تناسب، کیفیت متریال، دقت در ساخت و انتخابی معنا پیدا
> می‌کند که با گذشت زمان همچنان ارزش خود را حفظ کند.
>
> به همین دلیل، در گالری آرفام، انتخاب محصول تنها بخشی از تجربه شماست.
> با ارائه مشاوره متناسب با فضای شما و امکان بررسی چیدمان محصولات در
> محیط، تلاش می‌کنیم انتخاب نهایی با معماری، رنگ‌ها و شخصیت فضای شما
> هماهنگ باشد.
>
> آرفام برای کسانی است که میان زیبا بودن و درست طراحی شدن تفاوت قائل‌اند؛
> کسانی که به جزئیات توجه می‌کنند و ترجیح می‌دهند فضای زندگی‌شان بازتابی از
> سلیقه شخصی خودشان باشد.

------------------------------------------------------------------------

# 4. هویت بصری و قوانین UX

## 4.1 جهت طراحی

پالت اصلی:

-   نقره‌ای برای نوشته‌ها و جزئیات
-   مشکی مات
-   مشکی براق

سایت باید شبیه یک گالری دیجیتال لوکس باشد، نه یک Marketplace معمولی.

مرجع الهام:

-   سایت RH فقط به‌عنوان مرجع تجربه و طراحی استفاده شده و نباید کپی شود.

ویژگی‌های موردنظر:

-   تصاویر بزرگ و باکیفیت
-   چیدمان Editorial
-   مدیای تمام‌صفحه و سینمایی
-   فضای خالی مناسب
-   Navigation مینیمال
-   Product Card ساده
-   اهمیت بصری بیشتر تصویر و نام محصول نسبت به قیمت
-   Motion ظریف و کنترل‌شده
-   فضای مشکی/نقره‌ای لوکس

## 4.2 فونت

فونت فارسی ترجیحی:

-   **Iran Sans**

نکته مهم:

-   نباید فونت دیگری را به‌صورت جعلی Iran Sans نام‌گذاری کنیم.
-   فایل واقعی فونت زمانی اضافه می‌شود که به‌صورت صحیح در اختیار پروژه
    قرار گیرد.

## 4.3 ساختار تجربه Homepage

ترتیب موردنظر:

1.  Hero و ایجاد Atmosphere
2.  Lifestyle / Editorial
3.  Selected Collections
4.  Featured Pieces
5.  Brand Story
6.  بخش‌های فروشگاهی

از شعارهای شاعرانه و تبلیغاتی غیرضروری پرهیز شود.

## 4.4 قانون تصاویر در موبایل

در موبایل تصاویر اصلی و محصولات باید تا حد امکان کامل دیده شوند و Crop
شدید نداشته باشند.

## 4.5 Design Lock

امید نسخه فعلی سایت را دیده و اعلام کرده که دقیقاً حس لوکسی را که
می‌خواسته منتقل می‌کند.

حتی جزئیاتی مانند اندازه و مدل دکمه Cart نیز مورد پسند او بوده است.

بنابراین:

**زبان بصری فعلی سایت تأیید و قفل شده است.**

اضافه شدن Backend و قابلیت‌های جدید نباید ظاهر سایت را به یک فروشگاه
عمومی و معمولی تبدیل کند.

------------------------------------------------------------------------

# 5. لوگوی رسمی

لوگوی اصلی ارائه‌شده:

-   ابعاد اولیه 1024×1024
-   پس‌زمینه مشکی
-   نماد A نقره‌ای/سفید
-   نوشته ARFAM GALLERY

Assetهای ساخته‌شده:

-   `public/brand/arfam-logo-original.png`
-   `public/brand/arfam-logo-full-transparent.png`
-   `public/brand/arfam-symbol-transparent.png`

استفاده فعلی:

-   Desktop: لوگوی کامل 64px
-   Mobile: نماد 40px

محل و اندازه فعلی لوگو تأیید بصری شده است.

**بدون دلیل یا درخواست مشخص تغییر نکند.**

------------------------------------------------------------------------

# 6. Signature Background

امید درخواست کرد موتیف خطی/پارامتریک سمت راست لوگو به‌عنوان بخشی از هویت
بصری در پس‌زمینه Storefront ادامه پیدا کند.

Asset تأییدشده:

`public/media/brand/arfam-signature-background.webp`

مشخصات:

-   941×1672
-   Lossless WebP
-   حدود 599KB
-   زمینه بسیار تیره با خطوط نقره‌ای/خاکستری

نحوه اجرا:

-   یک‌بار در Storefront Layout
-   پشت محتوای Storefront
-   Admin شامل آن نمی‌شود
-   Repeat یا Stretch نمی‌شود
-   Hero و بخش‌های مدیا می‌توانند Opaque بمانند

تنظیمات نهایی Desktop:

-   Opacity: `0.40`
-   Position: `28% center`
-   Size: `auto 138vh`

تنظیمات Mobile:

-   Opacity: `0.34`
-   Position: `56% center`
-   Size: `auto 110vh`

مشکل دیده‌شده هنگام اجرا:

-   `SelectedCollections` و `BrandStory` دارای `bg-matte` مات بودند و
    Background را می‌پوشاندند.
-   Wrapper این بخش‌ها Transparent شد.
-   Editorial و Featured از قبل Transparent بودند.
-   Hero همچنان Opaque است.
-   سطوح تصاویر محصولات Matte باقی مانده‌اند.

نتیجه توسط کاربر بسیار خوب و لوکس ارزیابی شد.

Commit:

`feat: add ARFAM signature storefront background`

Hash:

`e27ce592f0ea581c45ba9e0d4b1732b7a240b61f`

------------------------------------------------------------------------

# 7. ساختار رسمی سایت

## 7.1 منوی اصلی

منوی نهایی:

-   صفحه اصلی
-   محصولات
-   کالکشن‌ها
-   مجله آرفام
-   درباره آرفام
-   ارتباط با آرفام

Navigation کامل Desktop از breakpoint `xl` نمایش داده می‌شود.

در عرض‌های کوچک‌تر Mobile Menu استفاده می‌شود.

## 7.2 دسته‌بندی رسمی محصولات

### 1. اکسسوری دکوری

-   مجسمه و فیگور
-   اکسسوری رومیزی
-   دکور دیواری
-   شمعدان
-   سینی دکوراتیو
-   شمع دکوراتیو

### 2. ساعت

-   ساعت دیواری مربع
-   ساعت دیواری گرد
-   ساعت رومیزی
-   ساعت کنار سالنی

### 3. سرویس پذیرایی

-   کالکشن آلومینیومی
-   کالکشن استیل
-   کالکشن برنجی
-   کالکشن کریستال و شیشه
-   کالکشن چوبی
-   کالکشن سرامیکی
-   کالکشن ملامین

### 4. نور و روشنایی

-   آباژور رومیزی
-   آباژور کنار سالنی
-   لوستر
-   چراغ دکوراتیو

### 5. گل و گلدان

-   گلدان دکوراتیو
-   گلدان کنار سالنی
-   گل مصنوعی / گل دکوراتیو

### 6. میز

-   میز ۳ سایز جلو مبلی
-   میز ۳ سایز عسلی
-   میز دکوراتیو
-   کنسول

### 7. تابلو و آثار هنری

-   آثار هنری سفارشی
-   دیجیتال آرت

مجموع:

-   **7 دسته اصلی**
-   **30 زیردسته**

## 7.3 کالکشن‌های رسمی

-   جدیدترین
-   پرفروش‌ترین
-   امضای آرفام
-   آثار محدود

### قانون معماری

**Category و Collection دو مفهوم مستقل هستند.**

هر Product می‌تواند به Category/Subcategory تعلق داشته باشد و هم‌زمان عضو
صفر، یک یا چند Collection باشد.

------------------------------------------------------------------------

# 8. مجله آرفام

دسته‌های رسمی:

-   دکوراسیون و سبک‌شناسی
-   راهنمای انتخاب و چیدمان
-   راهنمای متریال و اصول نگهداری

ساختار آینده:

`MagazineCategory → Article`

در آینده مدیریت دسته‌ها و مقالات باید از Admin انجام شود.

برای پر نشان دادن سایت نباید Article جعلی ساخته شود.

------------------------------------------------------------------------

# 9. ساختار «درباره آرفام»

بخش‌های رسمی:

-   داستان برند
-   طراحی و تولید
-   کیفیت و متریال
-   چشم‌انداز آرفام

متن رسمی فعلی عمدتاً سه بخش اول را پوشش می‌دهد.

هنوز متن رسمی مستقلی برای «چشم‌انداز آرفام» از امید دریافت نشده است.

**نباید متن ساختگی برای آن تولید شود.**

------------------------------------------------------------------------

# 10. نیازمندی‌های عملکردی

## 10.1 مشاهده عمومی

بازدیدکننده بدون ثبت‌نام می‌تواند محصولات را مشاهده کند.

## 10.2 ثبت‌نام

قبل از خرید ثبت‌نام الزامی است.

فیلدهای اجباری:

-   نام
-   نام خانوادگی
-   تاریخ تولد
-   شماره موبایل
-   رمز عبور

اختیاری:

-   ایمیل

تاریخ تولد در UI:

-   شمسی/Jalali
-   کاملاً فارسی و RTL
-   نام ماه‌های فارسی

ذخیره Backend:

-   تاریخ استاندارد/Normalized
-   نمایش و ورود شمسی در UI

## 10.3 ورود

-   شماره موبایل
-   رمز عبور

## 10.4 Role

حداقل:

-   `CUSTOMER`
-   `ADMIN`

## 10.5 Cart / Checkout / Order

سیستم واقعی آینده:

-   سبد خرید
-   تعداد
-   حذف
-   جمع
-   آدرس
-   Checkout
-   ایجاد سفارش
-   وضعیت سفارش
-   وضعیت پرداخت

## 10.6 پنل مدیریت

پنل اختصاصی ARFAM.

بخش‌های موردنیاز:

-   Dashboard
-   Products
-   Category/Subcategory
-   Collection
-   تصاویر محصول
-   قیمت
-   موجودی
-   سفارش‌ها
-   وضعیت سفارش
-   کاربران/مشتریان
-   VIP
-   گزارش‌ها
-   Magazine
-   SMS

------------------------------------------------------------------------

# 11. فاکتور رسمی ARFAM

امید تصویر واقعی نمونه فاکتور ARFAM را ارائه کرده است.

**فاکتور نهایی باید تا حد عملی بر اساس همان تصویر بازسازی شود و نباید یک
Template عمومی جایگزین آن شود.**

ویژگی بصری:

-   مشکی/نقره‌ای
-   لوگوی ARFAM
-   RTL
-   Thumbnail محصول
-   Footer لوکس

اطلاعات موردنیاز:

-   شماره فاکتور Unique
-   تاریخ
-   نام مشتری
-   موبایل
-   آدرس ارسال
-   روش پرداخت
-   تصویر محصول
-   نام محصول
-   Model/SKU
-   تعداد
-   قیمت واحد
-   جمع ردیف
-   Subtotal
-   Discount
-   هزینه ارسال
-   مبلغ قابل پرداخت
-   توضیحات
-   QR/Footer
-   وب‌سایت/ایمیل/اینستاگرام پس از دریافت اطلاعات رسمی

در نمونه SKUهایی مانند موارد زیر وجود داشت:

-   `LUX-R310`
-   `CAN-220`
-   `BWL-860`

این موارد صرفاً نمونه‌اند و فرمت نهایی SKU را تعیین نمی‌کنند.

### الزام Backend

هر اطلاعاتی که فاکتور لازم دارد باید در Backend/Database وجود داشته
باشد.

اطلاعات تاریخی سفارش و فاکتور نباید با تغییر اطلاعات فعلی Product یا
Customer تغییر کنند.

بنابراین Snapshot لازم است.

رابطه عمومی مبلغ:

`Subtotal - Discount + Shipping = Payable`

قوانین نهایی قابل اصلاح هستند.

### شماره فاکتور

نمونه‌ای مانند `1403-05-27-0128` در فاکتور وجود داشته است.

از روی یک نمونه نباید Algorithm شماره فاکتور حدس زده شود.

فعلاً Database فقط باید Unique Invoice Number را پشتیبانی کند.

خروجی آینده:

-   Print
-   PDF

------------------------------------------------------------------------

# 12. سیستم VIP

محصولات VIP فقط برای مشتریان VIP تأییدشده قابل مشاهده/خرید هستند.

VIP نباید در Navigation عمومی قرار گیرد.

## 12.1 روند تأیید

1.  مشتری از بخش عمومی خرید می‌کند.
2.  امید تصمیم می‌گیرد مشتری VIP شود یا خیر.
3.  کد VIP اختصاصی صادر و تأیید می‌شود.
4.  کد به حساب همان مشتری متصل می‌شود.
5.  ورود اولیه VIP اعتبارسنجی می‌شود.

## 12.2 سه عامل ورود اولیه

همه موارد لازم‌اند:

1.  شماره موبایل ثبت‌شده
2.  رمز عادی حساب
3.  کد VIP صادرشده و تأییدشده توسط امید

داشتن کد به‌تنهایی کافی نیست.

کد VIP نباید قابل انتقال آزاد بین مشتریان باشد.

Statusهای پیشنهادی:

-   `PENDING`
-   `APPROVED`
-   `REJECTED`

پس از Activation اولیه معتبر، Session می‌تواند مجوز VIP را نگه دارد.

------------------------------------------------------------------------

# 13. کیف پول

قانون قطعی:

-   برای هر خرید واجد شرایط **200,000 تومان** اعتبار کیف پول داده می‌شود.
-   اعتبار استفاده‌نشده جمع می‌شود.
-   در خرید آینده قابل استفاده است.

## 13.1 زمان فعال شدن اعتبار

اعتبار **بلافاصله بعد از تأیید موفق پرداخت کامل** فعال می‌شود.

ارسال یا تحویل کالا شرط نیست.

بنابراین:

-   در زمان ساخت Order اعتبار داده نشود.
-   منتظر Shipment نمانیم.
-   Trigger مربوط به Payment Successful است.

## 13.2 معماری

Wallet باید **Ledger-based** باشد، نه صرفاً یک Balance قابل تغییر.

Transactionهای مورد انتظار:

-   CREDIT
-   DEBIT
-   ADJUSTMENT

## 13.3 تصمیم باز

رفتار اعتبار در Refund/Return هنوز از امید تأیید نشده است.

نباید قانون ساختگی تعریف شود.

------------------------------------------------------------------------

# 14. SMS

Admin در آینده باید بتواند SMS ارسال کند:

-   تکی
-   گروهی
-   خودکار/زمان‌بندی‌شده

نمونه:

-   پیام تولد حدود یک هفته قبل از تاریخ تولد مشتری

Provider هنوز انتخاب نشده است.

**Provider نباید بدون تأیید Hard-code شود.**

------------------------------------------------------------------------

# 15. گزارش و فیلتر

نمونه درخواست امید:

> از تاریخ X تا Y مشتریان/سفارش‌هایی را نشان بده که فاکتور بالای 50
> میلیون تومان دارند.

فیلترهای آینده حداقل:

-   بازه تاریخ
-   مبلغ Order/Invoice
-   Customer
-   Order Status
-   Payment Status
-   در صورت نیاز VIP Status

Excel Export فقط به‌عنوان ایده مطرح شده و هنوز Requirement قطعی نیست.

------------------------------------------------------------------------

# 16. Technology Stack قطعی

Frontend/Backend:

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   Framer Motion
-   Next.js Server capabilities
-   Server Actions / Route Handlers در صورت نیاز

Database:

-   Prisma ORM
-   SQLite

Authentication:

-   Auth.js

Validation:

-   Zod

Admin:

-   Custom Admin Panel

Package Manager:

-   npm

Version Control:

-   Git / GitHub

نسخه‌های اصلی ثبت‌شده:

-   Next.js `16.3.5`
-   React `19.3.0`
-   TypeScript `5.9.3`
-   Tailwind `4.3.3`

پکیج‌های Prisma در Phase 10:

-   `@prisma/client@7.10.0`
-   `@prisma/adapter-better-sqlite3@7.10.0`
-   `prisma@7.10.0`
-   `dotenv`
-   `@types/better-sqlite3`
-   `cross-env`

------------------------------------------------------------------------

# 17. تصمیم قطعی Database

> **SQLite در Development، Testing و Production استفاده می‌شود.**

SQLite در Production باید روی Persistent Storage سرور/هاست باشد.

بدون دستور صریح نباید Database به PostgreSQL، MySQL یا گزینه دیگری تغییر
کند.

Hosting باید این موارد را پشتیبانی کند:

-   Node/Next.js
-   Persistent Storage
-   SQLite Production
-   Backup

------------------------------------------------------------------------

# 18. پول و زبان

واحد مالی:

-   **تومان**
-   تمام مبالغ به‌صورت Integer ذخیره می‌شوند.
-   برای پول از Float استفاده نشود.

زبان اولیه:

-   فارسی
-   RTL

خارج از Scope مگر با درخواست:

-   چندزبانه
-   چندارزی

------------------------------------------------------------------------

# 19. Media / Storage

Development:

-   Assetهای Local قابل قبول‌اند.

Production:

-   Provider ذخیره تصاویر هنوز مشخص نیست.

نباید پروژه را بدون تأیید به Provider خاصی قفل کرد.

------------------------------------------------------------------------

# 20. دامنه‌ها

امید هر دو دامنه را خریداری کرده:

-   `.ir`
-   `.com`

نام دقیق دامنه‌ها در این سند ثبت نشده است.

در Deployment باید:

-   یک دامنه Primary/Canonical انتخاب شود.
-   دامنه دیگر Redirect شود.

نباید نام دامنه حدس زده شود.

------------------------------------------------------------------------

# 21. Hosting و Infrastructure

قبل از Deployment باید یک Phase اختصاصی برای انتخاب Hosting داشته باشیم.

در آن زمان گزینه‌های واقعی و قیمت‌های روز بررسی شوند:

-   قیمت
-   Next.js/Node
-   Persistent Storage
-   SQLite
-   Backup
-   CPU/RAM
-   Traffic/Bandwidth
-   Upgrade
-   SSL
-   دامنه `.ir` و `.com`
-   Redirect
-   Image Storage
-   سازگاری با Payment
-   سازگاری با SMS

قبل از تحقیق روز، نباید به امید پیشنهاد خرید Host مشخص داده شود.

------------------------------------------------------------------------

# 22. Git و Workflow توسعه

مسیر Local:

`E:\Projects\Arfam-Gallery`

GitHub:

`https://github.com/alidev1991/Afram-Gallery.git`

تفاوت املایی فعلی:

-   Local: **Arfam-Gallery**
-   GitHub: **Afram-Gallery**

این تفاوت فعلاً عمدی/موجود است و بدون درخواست اصلاح نشود.

## روند هر Phase

1.  کار Local
2.  اجرای Scope همان Phase
3.  QA
4.  گزارش
5.  **انتظار برای تأیید صریح**
6.  Commit
7.  Push

### قانون قطعی Git

**بدون تأیید صریح Commit یا Push انجام نشود.**

موارد ممنوع برای Commit:

-   `.env`
-   Password
-   Token
-   Credential
-   Secret
-   فایل حساس/موقت
-   فایل واقعی SQLite

بعد از Commit/Push گزارش شود:

-   Commit Message
-   Hash
-   Branch
-   Push Status
-   خلاصه فایل‌ها

------------------------------------------------------------------------

# 23. استراتژی توسعه

ابتدای پروژه عمداً Frontend و UX جلوتر رفت تا تجربه کارفرما اعتبارسنجی
شود.

استراتژی فعلی:

> **توسعه Full-stack به‌صورت Feature-by-Feature**

Mock و localStorage برای Demo مفید بودند.

از این مرحله به بعد قابلیت‌های جدی مانند Wallet، VIP و Reporting نباید به
شکل Mock توسعه پیدا کنند.

مسیر Backend:

1.  Prisma + SQLite
2.  Auth واقعی
3.  Product/Catalog واقعی
4.  Admin واقعی
5.  Cart/Order/Checkout
6.  Payment
7.  Invoice
8.  Wallet
9.  VIP
10. Reporting
11. Magazine
12. SMS
13. Production Hardening
14. Deployment

ظاهر لوکس تأییدشده باید در این مسیر حفظ شود.

------------------------------------------------------------------------

# 24. Project Constitution

پروژه بر اساس الگوی فارسی AI-Driven Development ارائه‌شده توسط کاربر
مدیریت می‌شود.

Project Constitution v1.0 دارای 42 بخش است.

هدف:

-   جلوگیری از Scope Drift
-   ثبات معماری
-   حفظ تصمیمات قفل‌شده
-   QA اجباری
-   جلوگیری از Push بدون اجازه
-   کنترل Phaseهای Codex

برای کاهش مصرف Token، متن کامل Constitution در هر Prompt تکرار نمی‌شود و
Promptهای کوتاه و Phase-specific ترجیح داده می‌شوند.

------------------------------------------------------------------------

# 25. تاریخچه توسعه

## Phase 1 --- Planning & Architecture

**وضعیت:** انجام شده

هدف:

-   تعریف جهت محصول
-   تعیین Luxury-first
-   تعیین جهت تکنولوژی
-   تعیین Workflow

در این Phase کد Production ساخته نشد.

------------------------------------------------------------------------

## Phase 2 --- Project Foundation & Setup

**وضعیت:** انجام شده / Commit / Push

موارد:

-   Next.js
-   React
-   TypeScript
-   Tailwind
-   ESLint
-   npm
-   App Router
-   ساختار `src`
-   پایه Persian RTL

Commit:

`chore: initialize project foundation`

Hash:

`02cc34c26146c06bc24b5e69b2724759c240248b`

------------------------------------------------------------------------

## Phase 3 --- Brand & Frontend Foundation

**وضعیت:** انجام شده / Commit / Push

موارد:

-   Semantic Design Tokens
-   Persian RTL Root
-   Storefront Layout
-   Header سه‌ستونه Desktop
-   Mobile Navigation
-   Footer
-   BrandLogo fallback
-   Container
-   Button
-   IconButton
-   Focus
-   Skip Navigation
-   Reduced Motion

Commit:

`feat: establish luxury storefront foundation`

Hash:

`9f01fd51603275d202b8d9bddbaaed16ef157abd`

------------------------------------------------------------------------

## Phase 4 --- Homepage Hero

**وضعیت:** انجام شده / Commit / Push

موارد:

-   Hero تمام‌صفحه
-   `hero-demo.webp`
-   Overlay Header
-   CTA «مشاهده مجموعه»

Fake Video ساخته‌شده از تصویر ثابت آزمایش و رد شد.

در آینده معماری می‌تواند Video واقعی را پشتیبانی کند.

Commit:

`feat(home): add editorial homepage hero`

Hash:

`a7b75191f194585b50f6be9a1e1e6adab2553df1`

------------------------------------------------------------------------

## Phase 5 --- Homepage Editorial Sections

**وضعیت:** انجام شده

موارد:

-   Editorial/Lifestyle
-   Selected Collections
-   Featured Pieces
-   قیمت Mock تومان
-   Brand Story
-   Footer
-   Assetهای WebP
-   بهبود نمایش تصاویر Mobile

شعارهای شاعرانه غیرضروری حذف شدند.

------------------------------------------------------------------------

## Phase 6 --- Collection & Product Experience

**وضعیت:** انجام شده

Routeها:

-   `/collections`
-   `/collections/objects`
-   `/collections/table`
-   `/collections/light`

Product Demo Routes:

-   `/products/noir-vessel`
-   `/products/arc-sculpture`
-   `/products/line-candlesticks`
-   `/products/floor-light`

موارد:

-   Typed Mock Catalog
-   Product Detail
-   Gallery
-   اطلاعات محصول
-   Add to Cart UI
-   Responsive Images
-   Static Generation

چهار Route محصول Demo در Phaseهای بعد حفظ شدند.

------------------------------------------------------------------------

## Phase 7 --- Client Demo MVP

**وضعیت:** انجام شده / Commit / Push

### Cart

-   localStorage
-   Quantity
-   Remove
-   Total
-   Header Counter

### Authentication Demo

-   Register
-   Login
-   Validation
-   Login → Checkout Redirect
-   Protected Checkout

### Registration

-   نام
-   نام خانوادگی
-   تاریخ تولد شمسی
-   موبایل
-   رمز
-   ایمیل اختیاری

### Birth Date

-   Picker فارسی/RTL
-   ماه‌های فارسی
-   ذخیره Normalized
-   نمایش شمسی

### Admin Demo

-   Dashboard
-   Products
-   Orders
-   Customers

### موارد دیگر

-   Sync بین Customer/Admin localStorage
-   تاریخ شمسی مشتری
-   Mobile Customer Cards
-   Demo Credential Store
-   PBKDF2-SHA256
-   Random Salt
-   210,000 Iterations
-   عدم ذخیره Raw Password
-   Mobile Normalization
-   `/recover-account`

Credentialهای Demo:

Customer: - `09120000000` - `ArfamDemo7`

Admin: - `admin` - `ArfamAdmin7`

این سیستم Demo است و در آینده با Auth و Database واقعی جایگزین می‌شود.

Commit:

`feat: complete client demo storefront and account flows`

Hash:

`4f0c2352de52a26d9f2920839bcc94426e704dc3`

------------------------------------------------------------------------

# 26. Official Logo Integration

**وضعیت:** انجام شده / تأیید / Commit / Push

لوگوی رسمی امید بدون Redesign وارد پروژه شد.

Commit:

`feat: integrate official ARFAM brand logo`

Hash:

`5a0dffe32cd8adcb7b6fc487db16099e73bad4c2`

------------------------------------------------------------------------

# 27. Official About ARFAM

**وضعیت:** انجام شده / Commit / Push

موارد:

-   متن کوتاه رسمی Homepage
-   `/about`
-   متن کامل رسمی
-   Navigation/Footer Link

Commit:

`feat: add official ARFAM brand story and about page`

Hash:

`3f4c717cf689bdb417eba3065acc969354959983`

------------------------------------------------------------------------

# 28. Phase 8 --- Demo Polish

**وضعیت:** انجام شده / Commit / Push

Commit اول:

`fix: polish storefront demo presentation and Persian cart counts`

Hash:

`b2eedbb32a20afcdc155a00e2829d73f208615cd`

فایل‌ها:

-   `src/app/(storefront)/cart/page.tsx`
-   `src/app/(storefront)/checkout/page.tsx`
-   `src/components/cart/cart-indicator.tsx`
-   `src/components/auth/login-form.tsx`

Commit دوم:

`feat: improve responsive admin demo presentation`

Hash:

`f1e663a02397b3b76fc5d1da913a117f46e6b659`

فایل‌ها:

-   `src/app/admin/(panel)/page.tsx`
-   `src/app/admin/(panel)/products/page.tsx`
-   `src/app/admin/(panel)/orders/page.tsx`
-   `src/app/admin/(panel)/customers/page.tsx`
-   `src/components/admin/admin-customers-table.tsx`
-   `src/components/admin/admin-login-form.tsx`
-   `src/components/admin/admin-shell.tsx`

QA:

-   Lint موفق
-   Typecheck موفق
-   Build موفق
-   diff-check موفق
-   Working Tree پس از Commit تمیز
-   Main با origin/main همگام

------------------------------------------------------------------------

# 29. Phase 9 --- Official Site Structure

**وضعیت:** انجام شده / تأیید بصری / Commit / Push

Navigation نهایی:

-   صفحه اصلی
-   محصولات
-   کالکشن‌ها
-   مجله آرفام
-   درباره آرفام
-   ارتباط با آرفام

Routeها:

-   `/products`
-   `/products/category/[categorySlug]`
-   `/products/category/[categorySlug]/[subcategorySlug]`
-   `/collections/[slug]`
-   `/magazine`
-   `/magazine/category/[categorySlug]`
-   `/about`
-   `/contact`

چهار Route قبلی Product حفظ شدند.

موارد:

-   7 Category
-   30 Subcategory
-   Typed Config
-   4 Collection رسمی
-   استقلال Category و Collection
-   Magazine با 3 Topic رسمی
-   Empty State واقعی و بدون Article جعلی
-   About بر اساس محتوای رسمی
-   Contact بدون اطلاعات ساختگی

### مشکل Mobile Navigation

در Visual QA مشخص شد محتوای About از پشت Menu دیده می‌شود.

Fix:

-   Full-screen Opaque Matte-black Overlay
-   Portal به body
-   `z-index: 999`
-   Scroll Lock
-   Internal Scroll
-   Escape Close
-   Logo/Close/6 Links حفظ شدند
-   Desktop تغییر نکرد

QA در عرض‌های 390 و 500 موفق بود.

Commit:

`feat: implement official ARFAM site structure`

Hash:

`8372fdf795b3a64c37667ac939dbcb9d140a0014`

خلاصه:

-   16 فایل
-   7 New
-   9 Modified
-   656 Addition
-   167 Deletion

QA:

-   Lint موفق
-   Typecheck موفق
-   Build موفق
-   diff-check موفق
-   Git Clean
-   Local/Origin Sync

------------------------------------------------------------------------

# 30. Phase 9.5 --- Luxury Motion System

**وضعیت:** انجام شده / فعلاً تأیید بصری / Commit / Push

هدف:

اضافه کردن Scroll Animation ظریف بدون آسیب به Luxury Design.

Componentها:

-   `Reveal`
-   `RevealGroup`
-   `RevealItem`

فایل:

`src/components/motion/reveal.tsx`

Modeها:

-   `left`
-   `right`
-   `bottom`
-   `fade`

تنظیمات:

-   Distance پیش‌فرض: 44px
-   محدوده استفاده: 32--44px
-   Duration: 0.82s
-   Section Intro: 0.9s
-   Easing: `[0.22,1,0.36,1]`
-   Stagger: 0.09s
-   Homepage Cards: 0.1s
-   Group Delay: 0.04s
-   Viewport: 0.18
-   Group Viewport: 0.12
-   Once on Entry

Accessibility:

-   `prefers-reduced-motion`
-   matchMedia/useSyncExternalStore
-   CSS fallback

اعمال‌شده روی:

-   Homepage بعد از Hero
-   Editorial Image
-   Selected Collections
-   Featured Pieces
-   Brand Story
-   Products
-   Category/Subcategory
-   Collection/Detail
-   Product Gallery/Info
-   Magazine/Category
-   About
-   Contact

بدون تغییر:

-   Hero
-   Logo
-   Signature Background
-   Header
-   Mobile Navigation
-   Admin

QA:

-   Desktop 1440: 11 Route
-   Mobile 500: 7 Route
-   Mobile 390: 7 Route
-   بدون Overflow
-   بدون Layout Shift
-   بدون Broken Image
-   Admin بدون تغییر

Commit:

`feat: add luxury storefront motion system`

Hash:

`2b43d9b463f87a3e45b1c045e3d83dc188a0b6f3`

خلاصه:

-   21 فایل
-   376 Addition
-   56 Deletion
-   67 Page Build
-   Lint موفق
-   Typecheck موفق
-   Build موفق
-   diff-check موفق
-   Main Clean/Sync

------------------------------------------------------------------------

# 31. Phase 10 --- Database Foundation

**وضعیت فعلی:** **تکمیل و تأیید شده**.

هدف:

ساخت پایه Database واقعی با Prisma + SQLite بدون حذف یا جایگزینی Demo
فعلی.

## 31.1 Packageهای اضافه‌شده

Runtime:

-   `@prisma/client@7.10.0`
-   `@prisma/adapter-better-sqlite3@7.10.0`
-   `dotenv`

Development:

-   `prisma@7.10.0`
-   `@types/better-sqlite3`
-   `cross-env`

## 31.2 فایل‌های جدید

-   `.env.example`
-   `prisma7.config.ts`
-   `prisma/schema.prisma`
-   `prisma/README.md`
-   `prisma/migrations/20260930142010_init/migration.sql`
-   `prisma/migrations/migration_lock.toml`
-   `ARFAM-Gallery-Master-Project-History-FA.md`

## 31.3 فایل‌های تغییرکرده

-   `.gitignore`
-   `README.md`
-   `package.json`
-   `package-lock.json`

هیچ فایل UI، Storefront، Admin یا Demo تغییر نکرد.

## 31.4 Modelها

17 Model:

1.  `User`
2.  `Address`
3.  `Category`
4.  `Subcategory`
5.  `Collection`
6.  `Product`
7.  `ProductCollection`
8.  `ProductImage`
9.  `Order`
10. `OrderItem`
11. `Payment`
12. `Invoice`
13. `Wallet`
14. `WalletTransaction`
15. `VipCode`
16. `MagazineCategory`
17. `Article`

## 31.5 Enumها

6 Enum:

-   `UserRole`
-   `OrderStatus`
-   `PaymentStatus`
-   `WalletTransactionType`
-   `VipStatus`
-   `ArticleStatus`

## 31.6 Relationهای مهم

طبق گزارش Codex:

-   User → چند Address و Order
-   Category → Subcategory و Product
-   Product ↔ Collection با Join Model
-   Product → چند ProductImage
-   Order → OrderItem، Payment و Invoice
-   Order/OrderItem دارای Snapshot تاریخی
-   Order دارای `deletedAt` برای Soft Delete و نگهداری آرشیوی
-   User → Wallet → Ledger Transaction
-   WalletTransaction → Order اختیاری
-   VIP Code متعلق به User مشخص
-   MagazineCategory → Article

## 31.7 Constraint و Index

طبق گزارش:

-   Mobile کاربر Unique
-   Email کاربر Unique
-   SKU محصول Unique
-   Slug محصول Unique
-   Slug دسته/Collection/Article Unique
-   Invoice Number Unique
-   Invoice Order Unique
-   `codeHash` VIP Unique
-   VIP User Unique
-   یک Wallet برای هر User
-   Product/Collection Combination کنترل‌شده
-   ترتیب Product Image کنترل‌شده
-   Index برای Order/Payment/Publication/VIP/Date/Display Order
-   Index ترکیبی `Order.deletedAt + createdAt` برای فهرست فعال/آرشیوی

## 31.8 SQLite

`DATABASE_URL="file:./data/arfam.db"`

Database Local:

`data/arfam.db`

Database و Prisma Client Generated در Git Ignore هستند.

Production:

-   SQLite
-   Persistent Storage
-   Backup

## 31.9 Migration

Migration اولیه:

`20260930142010_init`

پس از Audit، همان Initial Migration پیش از Commit با ستون nullable
`Order.deletedAt` و Index مربوطه به‌روزرسانی شد. Migration جدید جداگانه
ایجاد نشد، چون Production Database وجود نداشت و اصلاح پیش از اولین Commit
Phase 10 انجام شد.

آزمایش‌ها:

-   روی Local DB موفق
-   از صفر روی DB خالی با `migrate deploy` موفق
-   بررسی Drift بین Migration و Schema: `No difference detected`
-   وجود ستون `deletedAt` و Index آن در DB خالی تأیید شد

## 31.10 Prisma QA

-   Format موفق
-   Validate موفق
-   Generate موفق
-   Migration Apply/Status موفق
-   SQLite Runtime Open/Read موفق
-   Schema و Migration Sync

## 31.11 QA پروژه

-   Lint موفق
-   Type Check موفق
-   Production Build موفق
-   هر 67 صفحه Build شدند
-   `git diff --check` موفق
-   Secret Track نشده
-   `.env` واقعی Track نشده
-   Database Track نشده

## 31.12 Git Status قبل از تأیید Phase 10

``` text
## main...origin/main
 M .gitignore
 M README.md
 M package-lock.json
 M package.json
?? .env.example
?? ARFAM-Gallery-Master-Project-History-FA.md
?? prisma/
?? prisma7.config.ts
```

## 31.13 نکات معماری Phase 10

-   پول Integer Toman
-   Birth Date استاندارد در DB و شمسی در UI
-   Wallet به‌صورت Ledger-based
-   منطق 200,000 تومان هنوز اجرا نشده
-   Password فقط Hash
-   VIP Code فقط Hash
-   Payment Provider فرض نشده
-   Algorithm شماره Invoice فرض نشده
-   Orderها رکورد آرشیوی هستند؛ حذف عادی باید فقط با مقداردهی
    `deletedAt` انجام شود و Hard Delete در Application مجاز نیست
-   Application Layer هنگام Create/Update محصول باید تعلق Subcategory به
    Category انتخاب‌شده را Validate کند
-   Seed انجام نشده
-   Seed رسمی آینده باید با اطلاعات تأییدشده و Idempotent باشد
-   Migrationهای Prisma 7.10 فعلاً با `RUST_LOG=info` و `cross-env` اجرا
    می‌شوند
-   Audit Dependency چهار هشدار High در Dependencyهای داخلی Prisma CLI
    گزارش کرده
-   Auto Fix اجرا نشده چون Prisma را به Version 6 Downgrade می‌کرد

## 31.14 نتیجه Audit و اصلاحات نهایی

-   Audit کامل Relationها، Snapshotها، Cardinality و `onDelete` انجام شد
-   Product به Category اجباری و به Subcategory اختیاری متصل است
-   هماهنگی Category/Subcategory باید در Application Layer Validate شود
-   Snapshotهای Order و OrderItem تاریخچه تجاری را مستقل نگه می‌دارند
-   Order/Invoice دقیقاً One-to-One اختیاری است
-   Payment/Order رابطه One-to-Many دارد
-   Wallet فاقد Balance ذخیره‌شده و کاملاً Ledger-based است
-   هر User حداکثر یک VipCode دارد
-   Product VIP با `isVipOnly` مشخص می‌شود
-   برای Order فیلد `deletedAt` و Strategy اجباری Soft Delete اضافه شد
-   Relationهای دیگر بدون تغییر باقی ماندند
-   QA کامل پس از اصلاحات موفق بود

**وضعیت نهایی Phase 10: تکمیل و تأیید شده.**

------------------------------------------------------------------------

# 32. Roadmap V2

-   Phase 9 --- Official Site Structure --- **DONE**
-   Phase 9.5 --- Luxury Motion System --- **DONE**
-   Phase 10 --- Database Foundation --- **DONE / تأیید شده**
-   Phase 11 --- Real Authentication
-   Phase 12 --- Real Product & Catalog
-   Phase 13 --- Real Admin
-   Phase 14 --- Cart + Checkout + Address + Order
-   Phase 15 --- Payment Architecture
-   Phase 16 --- Official ARFAM Invoice
-   Phase 17 --- Wallet
-   Phase 18 --- VIP
-   Phase 19 --- Reports & Advanced Filters
-   Phase 20 --- Magazine
-   Phase 21 --- SMS
-   Phase 22 --- Contact + Brand Content Completion
-   Phase 23 --- Production Hardening
-   Phase 24 --- Deployment

همچنین:

-   Phase اختصاصی **Hosting & Infrastructure Decision** قبل از
    Deployment و ترجیحاً زودتر انجام شود.

------------------------------------------------------------------------

# 33. جزئیات مراحل آینده

## Phase 11 --- Real Authentication

-   جایگزینی تدریجی Demo Auth
-   Auth.js
-   User واقعی
-   Password Hash
-   Session
-   Customer/Admin Authorization
-   Login با Mobile
-   Register
-   حفظ Jalali UI
-   عدم تخریب UI تأییدشده

## Phase 12 --- Real Product & Catalog

-   اتصال Product/Category/Subcategory/Collection به SQLite
-   Product واقعی
-   Image
-   Inventory
-   Published/Active
-   SKU/Model
-   Price
-   حفظ Storefront لوکس

## Phase 13 --- Real Admin

-   Admin Auth
-   Product CRUD
-   Category/Subcategory
-   Collection
-   Product Image
-   Inventory
-   Customer
-   Order Management

## Phase 14 --- Cart + Checkout + Address + Order

-   Backend واقعی Cart/Checkout
-   Address
-   Order
-   Address Snapshot
-   OrderItem Snapshot
-   Total
-   Historical Integrity

## Phase 15 --- Payment Architecture

Provider-neutral.

Status حداقل:

-   `PENDING`
-   `SUCCESS`
-   `FAILED`

Provider تا زمان تأیید انتخاب نشود.

Payment Successful بعداً Trigger کیف پول خواهد بود.

## Phase 16 --- Official ARFAM Invoice

-   بر اساس Reference واقعی امید
-   استفاده از Order Snapshot
-   Print
-   PDF
-   بدون حدس Algorithm شماره فاکتور

## Phase 17 --- Wallet

-   Ledger-based
-   200,000 تومان برای خرید واجد شرایط
-   Trigger فقط بعد از Payment Success
-   Refund Rule هنوز در انتظار تصمیم امید

## Phase 18 --- VIP

-   تأیید امید
-   Code متصل به Customer
-   Mobile + Password + VIP Code
-   VIP Product
-   Authorization/Session

## Phase 19 --- Reports & Advanced Filters

-   Date Range
-   Amount
-   Customer
-   Order Status
-   Payment Status
-   VIP Status در صورت نیاز

## Phase 20 --- Magazine

-   Magazine Category
-   Article
-   Admin Management
-   Publication Status

## Phase 21 --- SMS

بعد از انتخاب Provider:

-   Individual
-   Bulk
-   Automated/Scheduled
-   Birthday Use Case

## Phase 22 --- Contact + Brand Content Completion

فقط با اطلاعات رسمی.

اطلاعات زیر نباید حدس زده شوند:

-   Address
-   Phone
-   Email
-   Social Links
-   Vision Copy

## Phase 23 --- Production Hardening

-   Security
-   Authorization
-   Error Handling
-   Logging
-   Backup
-   Production Environment
-   Data Integrity
-   Performance
-   SEO
-   Accessibility
-   Operational Checks

## Phase 24 --- Deployment

بعد از Hosting Decision:

-   Domain
-   SSL
-   Canonical
-   Redirect
-   Environment Variables
-   Backup
-   Media
-   Production Verification
-   Persistent SQLite

------------------------------------------------------------------------

# 34. تصمیمات باز

موارد زیر نباید حدس زده شوند:

1.  Payment Gateway نهایی
2.  SMS Provider
3.  رفتار Wallet در Refund/Return
4.  Algorithm شماره Invoice
5.  Production Hosting
6.  Production Media Storage
7.  Canonical Domain
8.  نام دقیق `.ir` و `.com` در این سند
9.  Contact Details رسمی
10. متن رسمی Vision
11. قطعی شدن Excel Export
12. Backup Policy نهایی
13. Discount Ruleهای تأییدنشده

------------------------------------------------------------------------

# 35. خارج از Scope مگر با درخواست صریح

-   Multi-vendor
-   Mobile App
-   ERP/CRM
-   Multi-language
-   Multi-currency
-   AI Recommendation
-   Recommendation Engine پیشرفته
-   Discount System تأییدنشده
-   Payment Provider تأییدنشده
-   SMS Provider تأییدنشده

------------------------------------------------------------------------

# 36. اصول Data Integrity

-   Order تاریخی باید ثابت بماند.
-   تغییر Product نباید OrderItem قدیمی را تغییر دهد.
-   تغییر Address مشتری نباید آدرس Order قدیمی را تغییر دهد.
-   Invoice باید از Snapshotهای ذخیره‌شده قابل بازسازی باشد.
-   پول Integer Toman است.
-   Password خام ذخیره نمی‌شود.
-   VIP Code خام ذخیره نمی‌شود.
-   Wallet Ledger-based است.
-   Payment Provider تا زمان انتخاب Abstract باقی می‌ماند.
-   Category و Collection مستقل‌اند.
-   Migrationها Version Controlled هستند.
-   فایل Production Database داخل Git قرار نمی‌گیرد.

------------------------------------------------------------------------

# 37. حفاظت از UI

بدون درخواست صریح، Backend Phaseهای آینده نباید موارد تأییدشده زیر را
تغییر دهند:

-   Luxury Visual Identity
-   Logo
-   Signature Background
-   Hero
-   Storefront Composition
-   Header
-   Navigation
-   Mobile Navigation
-   Cart Button Styling
-   Luxury Motion System
-   Mobile Image Framing

Backend باید پشت تجربه تأییدشده اضافه شود.

------------------------------------------------------------------------

# 38. وضعیت فعلی پروژه

در زمان این نسخه از سند:

-   Storefront لوکس ساخته و تأیید شده.
-   لوگوی رسمی وارد شده.
-   About رسمی وارد شده.
-   ساختار رسمی سایت اجرا شده.
-   Routeهای Product/Category/Collection وجود دارند.
-   Magazine با Empty State واقعی وجود دارد.
-   Contact بدون اطلاعات جعلی وجود دارد.
-   Demo Cart/Auth/Checkout/Admin وجود دارد.
-   Signature Background تأیید شده.
-   Motion System فعلاً تأیید شده.
-   Phase 10 Prisma + SQLite به‌صورت Local اجرا شده.
-   Initial Migration وجود دارد.
-   QA Phase 10 موفق است.
-   **Phase 10 تکمیل و تأیید شده است.**
-   Audit Schema و اصلاحات نهایی انجام شده است.
-   وضعیت: **تکمیل و تأیید شده**.

------------------------------------------------------------------------

# 39. قدم بعدی فوری

Phase 10 تکمیل و تأیید شده است.

قدم بعدی فقط پس از دستور صریح کارفرما، شروع Phase 11 --- Real
Authentication است.

------------------------------------------------------------------------

# 40. Template ثبت پایان هر Phase

در پایان هر Phase این ساختار به سند اضافه/تکمیل شود:

``` text
## Phase XX — [نام]

وضعیت:
تاریخ:

### هدف
...

### کارهای انجام‌شده
- ...

### فایل‌ها / معماری
- ...

### تصمیمات تجاری
- ...

### QA
- Prisma:
- Lint:
- Typecheck:
- Build:
- diff-check:
- Visual QA:

### Git
- Commit Message:
- Commit Hash:
- Branch:
- Push Status:

### موارد عقب‌افتاده
- ...

### تأثیر بر Phase بعد
- ...
```

------------------------------------------------------------------------

# 41. قانون نهایی نگهداری سند

این فایل یک Summary موقت نیست.

این فایل **سند جامع و دائمی پروژه ARFAM Gallery** است.

در پایان هر Phase:

> **قبل از رفتن به Phase بعد، این فایل باید به‌روزرسانی شود.**

هر Requirement جدید کارفرما که تأیید شد در این فایل ثبت شود.

اگر تصمیم قبلی تغییر کرد، تاریخچه قبلی پاک نشود و تصمیم جدید ثبت شود.

پس از Commit هر Phase، Commit Message و Hash دقیق ثبت شود.

پس از تصمیم Hosting/Infrastructure، معماری واقعی Production نیز ثبت شود.

این سند باید به‌اندازه‌ای کامل باشد که یک Developer یا یک Session جدید
AI/Codex بتواند پروژه را از صفر بفهمد و بدون از دست دادن تاریخچه،
محدودیت‌ها، قوانین تجاری، تصمیمات معماری و Roadmap، ادامه توسعه را انجام
دهد.
------------------------------------------------------------------------

## PHASE 11 FINAL HANDOFF (ARCHIVED)

- **Last Updated:** 2026-10-03
- **Current Phase:** Phase 11 — Real Authentication
- **Current Step:** Phase 11 Final QA & Closure
- **Current Status:** Phase 11 — Real Authentication تکمیل، QA نهایی و توسط کارفرما تأیید شده است.
- **Last Approved Commit:** Phase 11 — feat(auth): complete real customer and admin authentication
- **Current Branch:** main
- **Working Tree Status:** پس از Commit/Push نهایی Phase 11 باید Clean و همگام با origin/main باشد.

### Work Completed in Current Phase

- زیرساخت Auth.js، Credentials Provider، Prisma Client و Session/JWT typing ایجاد شده است.
- Registration واقعی با Prisma/SQLite و Argon2id پیاده‌سازی شده است.
- Login و Account مشتری به Session واقعی Auth.js متصل شده‌اند.
- Validation مشترک Client/Server برای نام فارسی، Mobile، Password/Confirmation و تاریخ شمسی پیاده‌سازی شده است.
- Real Admin Authentication، First Admin Setup، Role-based Server Authorization و Admin Logout واقعی پیاده‌سازی شده‌اند.
- Admin Storefront Entry مبتنی بر Session واقعی Auth.js در Footer عمومی اضافه شده است.

### Step 8 Completion Status

- BUG-01 مربوط به ناسازگاری Real Auth با Cart/Checkout رفع و QA شده است.
- Cart CTA از Session واقعی Auth.js و Checkout از authorization سروری Database-backed استفاده می‌کند.
- Step 8 توسط کارفرما تأیید شده است.

### Phase 11 Final Closure Completed

- یک Admin Entry مینیمال در Footer عمومی Storefront اضافه شد.
- Guest و CUSTOMER عبارت «ورود مدیر» با مقصد `/admin/login` را می‌بینند.
- ADMIN احراز هویت‌شده عبارت «پنل مدیریت» با مقصد `/admin` را می‌بیند.
- تشخیص نقش فقط از Session واقعی Auth.js انجام می‌شود؛ Demo Auth، localStorage Admin flag یا Credential جدید اضافه نشد.
- این لینک فقط Navigation convenience است و Authorization نهایی Routeهای Admin همچنان Server-side، Database-backed و متعلق به Step 9B باقی مانده است.
- Header، Navigation اصلی، Cart، Checkout، Admin layout و Design Lock پروژه تغییر نکردند.
- Full Customer Journey و Full Admin Journey روی Production Build و SQLite مستقل و خالی موفق بودند.
- Security Audit، Prisma QA، Lint، Type Check، Production Build و git diff --check بدون Blocker موفق شدند.
- QA Database، Userهای آزمایشی، Chrome profile، Script و Resultهای موقت حذف شدند.

### Work Currently In Progress

- Phase 11 تکمیل و بسته شده است.
- هیچ کار Phase 12 آغاز نشده است.
- مرحله بعد فقط با دستور صریح کارفرما آغاز می‌شود: Phase 12 — Real Product & Catalog.

### Files Created in Current Step

- src/components/admin/admin-footer-entry.tsx

### Files Changed in Current Step

- src/components/layout/site-footer.tsx
- ARFAM-Gallery-Master-Project-History-FA.md

### Files Removed in Current Step

- هیچ فایل Source در Step 9C حذف نشد.

### Phase 11 Files Included in Final Commit

تمام تغییرات زیر متعلق به Phase 11 هستند و در Commit نهایی واحد این Phase ثبت می‌شوند:

- .env.example
- package.json
- package-lock.json
- ARFAM-Gallery-Master-Project-History-FA.md
- src/auth.ts
- src/lib/prisma.ts
- src/types/next-auth.d.ts
- src/app/api/auth/[...nextauth]/route.ts
- src/lib/auth/authorization.ts
- src/lib/auth/password.ts
- src/lib/auth/safe-redirect.ts
- src/lib/auth/validation.ts
- src/app/(storefront)/account/actions.ts
- src/app/(storefront)/account/page.tsx
- src/app/(storefront)/register/actions.ts
- src/app/(storefront)/register/page.tsx
- src/app/(storefront)/login/page.tsx
- src/components/auth/account-indicator.tsx
- src/components/auth/login-form.tsx
- src/components/auth/registration-form.tsx
- src/components/layout/site-header.tsx
- src/lib/demo-customer.ts
- src/lib/jalali-date.ts
- src/providers/storefront-providers.tsx
- src/app/(storefront)/cart/page.tsx
- src/components/cart/cart-checkout-link.tsx
- src/app/(storefront)/checkout/page.tsx
- src/components/checkout/checkout-content.tsx
- src/app/admin/login/actions.ts
- src/components/admin/admin-setup-form.tsx
- src/app/admin/(panel)/layout.tsx
- src/app/admin/layout.tsx
- src/app/admin/login/page.tsx
- src/components/admin/admin-login-form.tsx
- src/components/admin/admin-shell.tsx
- src/components/admin/admin-footer-entry.tsx
- src/components/layout/site-footer.tsx
- حذف src/components/admin/admin-guard.tsx
- حذف src/providers/admin-demo-provider.tsx

### Important Architecture Decisions

- Checkout authorization باید Server-side و مبتنی بر Auth.js + Database User باشد.
- Cart فقط برای مقصد CTA از Session واقعی استفاده می‌کند؛ Cart data همچنان مستقل و Client-side است.
- کل Storefront Dynamic نشده و Auth-aware Client scope به CTA سبد محدود است.
- DemoAuthProvider فعلاً فقط برای Legacy Recovery حفظ می‌شود.
- Real Admin باید از همان Auth.js Credentials Provider مبتنی بر Mobile + Password استفاده کند؛ سیستم Authentication واقعی جداگانه ساخته نشود.
- Routeهای `(panel)` باید در Server Layout با `getAuthorizedUser(UserRole.ADMIN)` و Role تازه خوانده‌شده از Database محافظت شوند.
- `session.user.role` یا State مرورگر برای Authorization مرجع نهایی نیست؛ Database source of truth است.
- UI و Mock data فعلی Dashboard/Products/Orders/Customers در Step 9B حفظ می‌شوند.
- Footer مسیر رسمی و Production-valid ورود Admin است: Guest/CUSTOMER → «ورود مدیر» → /admin/login و ADMIN → «پنل مدیریت» → /admin.
- این Footer Entry و First Admin Setup برای راه‌اندازی اولیه Production تصمیم Locked هستند؛ وجود لینک جایگزین Authorization سروری نیست.
- Admin Entry فوتر فقط از `useSession()` برای انتخاب Label/Route استفاده می‌کند؛ این نمایش Client-side هیچ نقش امنیتی ندارد.
- Server layout پنل همچنان Role را از Database بازخوانی می‌کند و مرجع نهایی Authorization است.

### Step 9A Pre-Migration Admin Demo Architecture

- پیش از Step 9B، `AdminDemoProvider` Credential ثابت Source را بررسی و فلگ `arfam.demo.admin-session.v1=active` را در localStorage ذخیره می‌کرد.
- پیش از Step 9B، `AdminGuard` فقط پس از hydration همان Client state را بررسی و Guest را با `router.replace` به `/admin/login` می‌فرستاد.
- پیش از Step 9B، `AdminShell` Logout را فقط با حذف فلگ localStorage انجام می‌داد.
- Credential Demo در Login UI نیز نمایش داده می‌شود؛ این Flow Authentication یا Authorization واقعی محسوب نمی‌شود و با دست‌کاری localStorage قابل دورزدن است.
- `AdminCustomersTable` هنوز Customerهای Demo/localStorage را با Mock data ترکیب می‌کند؛ این بخش data demo است و در Step 9B، که فقط Auth/Security است، حفظ می‌شود.

### Step 9A Proposed Real Admin Architecture — Implemented in Step 9B

- Admin Login همان Credentials Provider، Validation، Argon2 verification، JWT Session و Auth.js cookie فعلی را استفاده می‌کند.
- `/admin/(panel)` با Server Component layout و DB-backed role check محافظت می‌شود.
- Guest به `/admin/login` هدایت می‌شود؛ CUSTOMER از پنل رد و به مسیر امن غیرادمین هدایت می‌شود؛ ADMIN وارد پنل می‌شود.
- Logout پنل از Auth.js `signOut` استفاده می‌کند.
- Admin Login UI از username Demo به Mobile + Password واقعی تغییر می‌کند، بدون Redesign غیرضروری.
- Demo Admin Provider، Client Guard، localStorage session و Credential نمایشی حذف/جایگزین می‌شوند.

### First Admin Bootstrap Options

1. **Promote یک User موجود با Script محلی کنترل‌شده — پیشنهاد اصلی**
   - Password جدید دریافت یا ذخیره نمی‌شود؛ User قبلاً با Registration واقعی و Argon2 ساخته شده است.
   - Script فقط در محیط عملیاتی مورد اعتماد اجرا، Mobile را Normalize، نبود Admin را بررسی و پس از تأیید صریح Role را به ADMIN تغییر می‌دهد.
   - مزیت: کمترین سطح حمله، بدون Credential در Git و بدون Public Admin Registration.
   - عیب: به دسترسی امن CLI/Database و فرایند عملیاتی مستند نیاز دارد.
2. **ساخت Admin جدید با CLI تعاملی**
   - می‌تواند Password را بدون Echo دریافت، Validation/Argon2 را reuse و User را مستقیم با Role=ADMIN بسازد.
   - مزیت: حساب Admin از Customer جدا است.
   - عیب: منطق Registration تکراری، مدیریت ورودی حساس و پیچیدگی بیشتر دارد.
3. **تغییر دستی Role با Prisma Studio/SQL**
   - مزیت: سریع و بدون کد جدید.
   - عیب: خطاپذیر، غیرقابل‌تکرار و فاقد Guard/Confirmation استاندارد؛ فقط راه اضطراری، نه روش رسمی.
4. **Bootstrap از Environment یا Startup**
   - رد شده است؛ خطر اجرای مجدد، باقی‌ماندن Credential در Environment و coupling با Startup/Deploy دارد.

### Step 9A Bootstrap Recommendation — Superseded by Final Step 9B Decision

- یک Customer واقعی مورد اعتماد ابتدا از Registration موجود ایجاد می‌شود.
- Script محلی Commit‌شده ولی بدون هیچ Credential ثابت، Mobile را به‌صورت تعاملی می‌گیرد و Normalize می‌کند.
- Script باید فقط وقتی تعداد ADMIN صفر است اجرا شود، User را دقیقاً پیدا کند، هویت Mask‌شده و تغییر Role را برای Confirmation نمایش دهد و در Transaction به ADMIN Promote کند.
- پس از Promotion، User Sign out و دوباره Login می‌کند تا JWT تازه صادر شود؛ Server Guard در هر درخواست Role را از Database بازخوانی می‌کند.
- هر Promotion بعدی خارج از Bootstrap اولیه به Flow مدیریتی/عملیاتی جداگانه و مجوز صریح نیاز دارد.

### Admin Auth Architecture — Current

- Admin و Customer هر دو از یک Auth.js Credentials Provider و JWT Session مشترک استفاده می‌کنند.
- Admin Login با Mobile + Password واقعی انجام می‌شود.
- Authorization تمام Routeهای `(panel)` در Server layout انجام می‌شود و Role تازه از Database خوانده می‌شود.
- Guest به `/admin/login?next=/admin` و CUSTOMER به `/` Redirect می‌شود؛ ADMIN مجاز است.
- Admin Login page برای ADMIN واردشده به `/admin` Redirect می‌شود.
- Logout با Auth.js انجام می‌شود و Cart مستقل Customer را حذف نمی‌کند.

### First Admin Setup Architecture — Final Decision

- برخلاف پیشنهاد اولیه Step 9A، تصمیم قطعی Step 9B ایجاد حساب First Admin از خود `/admin/login` است، نه Promote کردن Customer موجود.
- Setup فقط وقتی Database هیچ ADMIN ندارد نمایش داده می‌شود.
- فرم نام و نام خانوادگی فارسی، تاریخ تولد شمسی، Mobile، Password و confirmPassword دارد.
- Validation مشترک Registration، Mobile normalization و Argon2id reuse می‌شوند.
- Client هیچ Role ارسال نمی‌کند؛ Server همیشه Role را ADMIN تعیین می‌کند.
- بعد از اولین Admin، Setup هم در UI و هم در Server Action بسته می‌شود.

### Implemented First Admin Server-side Lock

- Admin existence روی Server و Database هم برای Render صفحه و هم دوباره داخل Server Action بررسی می‌شود.
- ایجاد First Admin در Prisma Transaction انجام می‌شود.
- به‌دلیل `BEGIN` deferred در SQLite adapter، یک no-op write در ابتدای Transaction قفل نوشتن Database را قبل از بررسی ADMIN می‌گیرد.
- یک Mutex سراسری همان Node process نیز Double Submitهای هم‌زمان را serialize می‌کند.
- Client هیچ Role ارسال نمی‌کند؛ create data همیشه `UserRole.ADMIN` ثابت Server-side دارد.
- QA Double Submit دو درخواست را ارسال کرد و Database فقط یک ADMIN ایجاد کرد.

### Development / Production First Admin Strategy

- Admin ساخته‌شده در Development فقط QA Admin است و پس از QA حذف می‌شود.
- Development Database و Production Database مستقل هستند.
- Production ابتدا بدون ADMIN راه‌اندازی می‌شود.
- Omid در Production از First Admin Setup اطلاعات و Password خودش را وارد می‌کند.
- پس از ایجاد اولین ADMIN، Setup در Server بسته می‌شود و ورودهای بعدی فقط Mobile + Password هستند.
- هیچ QA Admin یا Credential آزمایشی Development به Production منتقل نمی‌شود.

### Demo Admin Components Removed / Preserved

- حذف شد: AdminDemoProvider، useAdminDemo، AdminGuard، Admin localStorage session، Credential ثابت، Credential display و Demo logout.
- هیچ Demo Admin Auth code باقی نمانده است.
- حفظ شد: Mock data و UI فعلی Dashboard، Products، Orders و Customers؛ این‌ها Authentication نیستند و Backend واقعی آن‌ها مربوط به Phaseهای بعد است.
- Demo Customer Auth فقط برای Legacy Recovery باقی مانده و از Admin مستقل است.

### Security Findings

- ضعف‌های Credential ثابت، localStorage قابل جعل و Client-only Guard رفع شدند.
- Schema فعلی برای Real Admin کافی بود و Migration ایجاد نشد.
- Public Admin Registration دائمی، Public Promote API، Client-selected Role و Browser self-promotion وجود ندارند.
- passwordHash به Client ارسال نمی‌شود؛ Password/confirmPassword ذخیره یا Log نمی‌شوند.
- Server Action قبل از create مستقیماً Database را بررسی می‌کند و Role را ثابت تعیین می‌کند.

### Pending Password Recovery Requirement

- Requirement قطعی برای هر دو Role CUSTOMER و ADMIN ثبت است.
- Flow آینده: Mobile → SMS OTP Verification → New Password.
- SMS Provider هنوز انتخاب نشده است؛ بنابراین Step 9B هیچ OTP جعلی یا Recovery ناامن اضافه نکرد.
- Legacy/Demo Recovery هنگام پیاده‌سازی Recovery واقعی باید جایگزین/حذف شود.

### Production Security Pending Items

- Rate Limiting و Lockout policy برای Login/Setup.
- تصمیم MFA برای Admin.
- Admin Audit Log.
- تأیید HTTPS و Secure Cookie در Hosting واقعی.
- محدودسازی دسترسی و امنیت فایل Production SQLite.
- Backup و Restore strategy برای Persistent Storage.

### Bugs Found

- **BUG-01 — Real Auth vs Cart/Checkout mismatch** در ممیزی Journey قطعی شد.

### Bugs Fixed

- **BUG-01 — Real Auth vs Cart/Checkout mismatch**
  - Root Cause: Login/Session/Account/Header از Auth.js واقعی استفاده می‌کردند، اما Cart و Checkout هنوز به DemoAuthProvider/useDemoAuth وابسته بودند.
  - Fix: Cart CTA به useSession() و Checkout protection به getAuthenticatedUser() در Server منتقل شد.
  - QA Status: رفع و در Dev Browser Journey، Refresh، Logout و Direct URL تأیید شد.

### Known / Intermittent Issues

- **Main Navigation Freeze**
  - در Manual Usage چند بار مشاهده شده و حداقل یک رخداد با VeePN خاموش بوده است.
  - Automated Stress Tests تاکنون آن را Reproduce نکرده‌اند و Root Cause قطعی نیست.
  - بدون Evidence هیچ Navigation workaround اضافه نشود.

### QA Completed / Still Required

- First Admin Setup در Database بدون ADMIN نمایش داده شد.
- Double Submit دو درخواست واقعی ارسال کرد؛ Database فقط یک ADMIN ساخت و Setup بسته شد.
- Admin QA: Role=ADMIN، Mobile normalized، Birth Date موجود و Password به‌صورت Argon2id hash ذخیره شد؛ Plain Password و confirmPassword ذخیره نشدند.
- ورود Admin، تمام Routeهای Admin، Refresh، Back/Forward، 20 Navigation سریع و Browser Restart موفق بودند.
- ADMIN بازکردن `/admin/login` را به `/admin` Redirect کرد.
- Access Matrix روی `/admin`، Products، Orders و Customers موفق بود: Guest → Admin Login، CUSTOMER → `/`، ADMIN → Allowed.
- Logout واقعی Admin موفق بود و Direct `/admin` پس از Logout محافظت شد.
- Responsive QA پنل در 390px و 500px بدون Horizontal Overflow موفق بود.
- Customer regression: Register، Login، Account، Product، Cart، Checkout و Logout موفق بود؛ Cart در Logout حفظ شد.
- Console/Runtime/Hydration/Network failure مشاهده نشد؛ فقط Warningهای قدیمی Hero quality و scroll behavior دیده شدند.
- Navigation Freeze در QA بازتولید نشد؛ Admin rapid navigation تعداد 20 از 20 موفق بود.
- Step 9C Browser QA: Guest و CUSTOMER در Footer «ورود مدیر» → `/admin/login` و ADMIN «پنل مدیریت» → `/admin` را دریافت کردند.
- Phase 11 Final QA روی Database مستقل با صفر ADMIN آغاز شد؛ First Admin Setup، ایجاد و Login مدیر، Routeهای Admin، Refresh، Logout و بسته‌شدن Setup پس از اولین ADMIN موفق بودند.
- DB-backed role re-check با Demote موقت ADMIN در QA مستقل تأیید شد: JWT قدیمی مجوز پنل نداد و Server layout دسترسی را رد کرد.
- Customer Final Journey موفق بود: Register → Login → Account → Product → Add to Cart → Cart → Checkout → Logout.
- Validation نام فارسی و confirmPassword ثبت‌نام نامعتبر را متوقف کردند؛ Mobile فارسی Normalize شد، تاریخ Jalali به Date استاندارد تبدیل شد و Passwordها Argon2id بودند.
- Safe redirect خارجی به مسیر امن Account بازگشت؛ Guest برای Account/Checkout به Login و CUSTOMER برای Admin به Storefront Redirect شد.
- Cart بعد از Refresh و Logout حفظ شد؛ Session بعد از Refresh معتبر ماند.
- Navigation Smoke/Stress نهایی 30 از 30 موفق بود؛ Known intermittent issue بازتولید نشد و همچنان Known/Intermittent باقی می‌ماند.
- Customer بازکردن مستقیم `/admin` را به `/` Redirect کرد و Admin shell Render نشد؛ Security boundary سروری Step 9B سالم ماند.
- Refresh برای CUSTOMER و ADMIN، Customer Logout و Admin Logout موفق بودند؛ بعد از Admin Logout لینک Footer دوباره «ورود مدیر» شد.
- Desktop 1440px و Mobile 500px/390px بدون Horizontal Overflow و با Footer خوانا Visual QA شدند.
- Regression Step 9C: Header بدون تغییر، Cart route خوانا، Checkout برای Customer واقعی قابل دسترسی و Customer/Admin session behavior سالم بود.
- Prisma Validate: موفق.
- Prisma Generate: موفق؛ Prisma Client 7.10.0.
- Migration Status: موفق؛ یک Migration و Database به‌روز است.
- Lint: موفق.
- Type Check: موفق.
- Production Build: موفق؛ تمام Admin routes به‌صورت Dynamic Server Routes ساخته شدند.
- تمام Admin/Customerهای QA در Database مستقل حذف شدند و Development Database اصلی در Final QA تغییر نکرد.
- تمام Scriptها، Resultها، Screenshot و Chrome profile موقت حذف شدند.
- Still Required: فقط دستور صریح کارفرما برای آغاز Phase 12 — Real Product & Catalog.
### Pending Decisions

- تأیید کارفرما برای Step 9C.
- انتخاب SMS Provider برای Password Recovery آینده CUSTOMER و ADMIN.
- تصمیم Production درباره Rate Limiting، MFA و Admin Audit Log در Phase مربوط.

### Next Phase

- Phase 12 — Real Product & Catalog.
- Phase 12 هنوز آغاز نشده و هیچ کد یا Migration مربوط به آن ایجاد نشده است.

### Exact NEXT ACTION

- پس از Commit/Push موفق Phase 11 متوقف شو و برای دستور صریح کارفرما جهت آغاز Phase 12 — Real Product & Catalog منتظر بمان.

### DO NOT CHANGE / Locked Decisions

- Motion، Navigation، Signature Background، UI تأییدشده، Jalali behavior، Argon2، Prisma Schema/Migration، Payment و Order architecture تغییر نکنند.
- Real Customer/Admin Auth، Server-side authorization، First Admin Setup و Footer Admin Entry تصمیم‌های تأییدشده و Locked هستند و بدون Phase/Approval صریح Refactor نشوند.
- هیچ workaround مبتنی بر window.location، forced reload، timeout، Router یا Motion اضافه نشود.

### How to Resume From Here

1. تأیید کن main با origin/main همگام و Working Tree پس از Commit نهایی Phase 11 Clean است.
2. Phase 11 را بسته و تأییدشده در نظر بگیر؛ تغییرات Auth را بدون Scope و Approval جدید بازطراحی نکن.
3. فقط با دستور صریح کارفرما Phase 12 — Real Product & Catalog را آغاز کن.
4. First Admin Setup را بدون طراحی جایگزین امن حذف نکن؛ Production ابتدا بدون ADMIN است و Omid حساب واقعی خودش را می‌سازد.
5. Footer Admin Entry مسیر رسمی ورود Production است و Authorization همچنان باید Server-side بماند.
6. Admin Mock data را تا Phase Backend مربوط تغییر نده.
7. Pending Password Recovery برای CUSTOMER و ADMIN و Production Security items را حفظ کن.
8. Known intermittent Navigation Freeze را بدون Root Cause قطعی حذف یا با workaround حدسی تغییر نده.
------------------------------------------------------------------------

## PHASE 12 — REAL PRODUCT & CATALOG

### Step 12A — Audit & Architecture

- تاریخ Audit: 2026-10-06
- وضعیت: تکمیل شده، در انتظار تأیید معماری و اجازه صریح برای Step 12B.
- این Step فقط Audit و طراحی معماری است.
- Prisma Schema، Migration، UI، Runtime code و Assetها در این Step تغییر نکردند.
- تمام پیشنهادهای این بخش وضعیت NOT YET IMPLEMENTED دارند.

### اطلاعات تجاری تأییدشده ساعت دیواری ARFAM

- خانواده محصول: ساعت دیواری.
- فرم‌های فعلی: مربع و گرد.
- فعلاً فقط تصاویر نمونه ساعت مربع دریافت شده‌اند؛ در Repository فعلی Asset رسمی ساعت Track نشده است.
- ممکن است برای هر فرم چند مدل/طراحی مستقل ایجاد شود.
- مربع یا گرد الزاماً Product Model مستقل محسوب نمی‌شود.
- بدنه فلزی است و قابلیت سفارش در طیف رنگی مختلف دارد.
- فریم و اعداد از استیل 304 با ضخامت 1 میلی‌متر هستند.
- فینیش‌های فعلی استیل: طلایی، سیلور و دودی.
- مشتری باید بتواند ترکیب رنگ بدنه و فینیش استیل را انتخاب کند.
- تفاوت قیمت تأییدشده‌ای برای رنگ بدنه یا فینیش وجود ندارد.
- موتور آرامگرد میتسو ژاپن، بی‌صدا، نصب دیواری، ضمانت مادام‌العمر موتور و رنگ بدنه، بسته‌بندی مقاوم 8 لایه، ارسال سراسر کشور و تولید ایران جزو اطلاعات واقعی اعلام‌شده هستند.
- متن رسمی درباره محصول توسط Omid ارائه شده و باید بعداً به‌صورت داده Admin-driven ثبت شود، نه داخل React Component.

### قیمت‌های تأییدشده — Integer Toman

#### مربع

- 65×65 cm: 9,800,000 تومان.
- 80×80 cm: 10,800,000 تومان.
- 100×100 cm: 11,800,000 تومان.
- 90×90 cm در جدول مشخصات اولیه ذکر شده اما قیمت رسمی ندارد؛ فعلاً نباید Variant قابل‌خرید یا قیمت برای آن ساخته شود و نیازمند تأیید Omid است.

#### گرد

- قطر 65 cm: 9,800,000 تومان.
- قطر 80 cm: 10,500,000 تومان.
- قطر 90 cm: 10,800,000 تومان.
- قطر 110 cm: 12,800,000 تومان.

### نیاز Listing تأییدشده

- نمونه‌های تصویری ترکیب رنگ/فینیش باید بتوانند به‌صورت کارت‌های مستقل در Listing دیده شوند.
- همه کارت‌ها باید به Product/مدل اصلی خود متصل باشند و Product تکراری مستقل ایجاد نکنند.
- کلیک روی کارت باید Product Detail همان Product را با ترکیب تصویری مربوط از قبل انتخاب‌شده باز کند.
- افزودن Presentation یا تصویر جدید در آینده نباید به تغییر کد نیاز داشته باشد.
- سه Presentation فعلی مربع: بدنه تیره + طلایی، بدنه تیره + سیلور و بدنه تیره + دودی.
- تصویر ممکن است Product Shot، Lifestyle Shot یا Detail Shot باشد.
- بک‌گراند تصاویر رسمی فعلاً بدون تغییر استفاده می‌شود و هیچ تصویر جعلی تولید نمی‌شود.

### Audit وضعیت فعلی Catalog

- Prisma Category، Subcategory، Collection، ProductCollection و ProductImage پایه‌های قابل استفاده‌ای دارند.
- Product فعلی فقط یک sku، priceToman و stock دارد و برای چند Variant کافی نیست.
- Product.model فقط String اختیاری است و مفهوم مدل/طراحی را ساختاری نمی‌کند.
- ProductImage فقط به Product متصل است و Image Type، Primary flag، Variant، Presentation و Alt/Sort scope پیشرفته ندارد.
- Collection و ProductCollection برای عضویت چندبه‌چند مناسب‌اند و قابل حفظ هستند.
- Category/Subcategory روابط مناسب دارند؛ Application Layer باید تعلق Subcategory به Category را کنترل کند.
- OrderItem Snapshot فعلی نام، model، SKU، تصویر و قیمت را نگه می‌دارد اما Variant identity و Option snapshot ندارد.
- Public Catalog از src/data/catalog.ts و src/data/site-structure.ts خوانده می‌شود و Database-backed نیست.
- Product/Category/Subcategory/Collection routes با Mock Data و generateStaticParams ساخته می‌شوند.
- Product Detail فقط یک قیمت، یک Add to Cart ساده، Gallery ثابت و مشخصات hardcoded در Mock Data دارد.
- Admin Products فقط نمایشی و مبتنی بر src/data/admin-demo.ts است و CRUD واقعی ندارد.
- تصاویر فعلی فقط Assetهای Track‌شده public هستند و Admin upload/storage architecture وجود ندارد.
- Cart کل CatalogProduct را به یک CartItem ساده تبدیل می‌کند و هویت آن فقط productSlug است.
- Cart فعلی Variant ID، SKU، Option selection، availability و تصویر Presentation را ذخیره نمی‌کند.
- Checkout قیمت Client-side Cart را نمایش می‌دهد و هنوز Order واقعی ایجاد نمی‌کند.

### معماری پیشنهادی — NOT YET IMPLEMENTED

#### Product / Model

- Product نماینده مدل یا طراحی تجاری قابل معرفی است؛ نمونه: ساعت دیواری مدل A.
- در شروع ProductModel table جدا پیشنهاد نمی‌شود؛ خود Product همان Model تجاری است.
- مدل B یک Product جدا خواهد بود.
- اگر یک طراحی در فرم مربع و گرد ارائه شود، هر دو فرم می‌توانند Optionهای همان Product باشند.
- اگر از نظر تولید/هویت دو طراحی مستقل باشند، می‌توانند Productهای جدا باشند؛ این تصمیم Product-by-Product است.

#### Taxonomy و فرم مربع/گرد

- پیشنهاد معماری: Category = ساعت، Subcategory = ساعت دیواری، و فرم مربع/گرد = Product Option.
- دلیل: فرم یک انتخاب قابل تغییر و مؤثر بر سایز/قیمت است و نباید Product یا taxonomy را تکراری کند.
- Routeهای فعلی square-wall-clocks و round-wall-clocks می‌توانند بعداً به Landing/Filtered View تبدیل شوند.
- تغییر taxonomy فعلی تصمیم تجاری قطعی نیست و قبل از Step 12B به تأیید Omid نیاز دارد.
- تا زمان تأیید، ساختار فعلی سایت نباید تغییر کند.

#### ProductVariant

- ProductVariant نماینده ترکیب معتبر و قابل سفارش است.
- SKU، قیمت نهایی، وضعیت خرید و Inventory باید در Variant قرار بگیرند.
- فقط ترکیب‌های معتبر Variant می‌شوند؛ وجود Option Value به‌تنهایی به معنی معتبر بودن تمام Cartesian combinations نیست.
- قیمت Variant منبع قطعی قیمت است؛ price delta روی رنگ/فینیش تا زمانی که Business Rule تأیید نشده پیشنهاد نمی‌شود.
- Option غیرمؤثر بر قیمت نیز می‌تواند Variant-defining باشد چون باید در SKU/Order قابل تشخیص و Snapshot باشد.
- Variant مربوط به 90×90 مربع تا زمان قیمت رسمی باید ساخته نشود یا به‌صورت غیرقابل‌خرید و بدون قیمت نگه‌داری شود؛ انتخاب بین این دو نیازمند تصمیم Step 12B است.

#### Options

- ProductOption تعریف انتخاب عمومی Product است؛ نمونه: فرم، سایز، رنگ بدنه، فینیش.
- ProductOptionValue مقادیر Admin-driven هر Option را نگه می‌دارد.
- VariantOptionValue هر Variant را به یک Value از Optionهای لازم متصل می‌کند.
- Rule مشترک Application باید تضمین کند هر Variant برای هر Option لازم دقیقاً یک Value دارد.
- فیلدهای خاص clockColor، clockFinish یا clockDiameter نباید ساخته شوند.

#### ProductPresentation

- ProductPresentation نماینده یک نمونه بصری/مرچندایزینگ است، نه یک Product یا SKU مستقل.
- Presentation می‌تواند یک زیرمجموعه از Option Valueها را انتخاب کند؛ نمونه بدنه تیره + فینیش طلایی بدون وابستگی به سایز.
- Presentation دارای slug، عنوان اختیاری، ترتیب، وضعیت نمایش و قابلیت نمایش در Listing است.
- PresentationOptionValue مقادیر تصویری ازپیش‌انتخاب‌شده را نگه می‌دارد.
- Listing card به Product اصلی با presentation query/preset لینک می‌شود.
- Product Detail با آن Presentation باز می‌شود، Optionهای مربوط را preselect می‌کند و انتخاب سایز را به مشتری می‌سپارد.

### تغییرات پیشنهادی Prisma — NOT YET IMPLEMENTED

- حفظ Category، Subcategory، Collection و ProductCollection با اصلاح queryهای Database-backed.
- Product: حفظ identity، slug، publish/VIP و توضیحات؛ تفکیک shortDescription و longDescription در صورت تأیید UI/Admin.
- انتقال sku، priceToman و stock از Product به ProductVariant پس از Migration مرحله‌ای.
- افزودن ProductVariant با productId، sku unique، priceToman، sortOrder، isActive، isPurchasable و سیاست Inventory پس از تصمیم تجاری.
- افزودن ProductOption.
- افزودن ProductOptionValue.
- افزودن VariantOptionValue.
- افزودن ProductPresentation.
- افزودن PresentationOptionValue.
- توسعه ProductImage با imageType، isPrimary، sortOrder، altText و ارتباط اختیاری با Variant یا Presentation.
- افزودن ProductSpecification به‌صورت key/value مرتب‌شونده و در صورت نیاز group، برای مشخصات متفاوت دسته‌ها.
- افزودن relation اختیاری variantId به OrderItem با onDelete: SetNull.
- افزودن Snapshot انتخاب‌ها به OrderItem؛ پیشنهاد ترجیحی جدول OrderItemOptionSnapshot برای label/valueهای immutable و قابل گزارش است.
- شکل دقیق Inventory policy و availability enum هنوز تصمیم تجاری Pending است.
- هیچ‌یک از این تغییرات در Step 12A اعمال نشده‌اند.

### ارتباط مدل‌های پیشنهادی — متنی

- Category 1 → N Subcategory.
- Category 1 → N Product و Subcategory 1 → N Product.
- Product N ↔ N Collection از طریق ProductCollection.
- Product 1 → N ProductVariant.
- Product 1 → N ProductOption.
- ProductOption 1 → N ProductOptionValue.
- ProductVariant N ↔ N ProductOptionValue از طریق VariantOptionValue.
- Product 1 → N ProductPresentation.
- ProductPresentation N ↔ N ProductOptionValue از طریق PresentationOptionValue.
- Product 1 → N ProductImage.
- ProductImage می‌تواند scope اختیاری ProductVariant یا ProductPresentation داشته باشد.
- Product 1 → N ProductSpecification.
- OrderItem به Product و ProductVariant به‌صورت nullable reference دارد و Snapshotهای immutable را مستقل نگه می‌دارد.

### روش قیمت‌گذاری پیشنهادی — NOT YET IMPLEMENTED

- مبلغ نهایی روی ProductVariant و به‌صورت Integer Toman ذخیره شود.
- Listing قیمت را از Variantهای active/purchasable محاسبه کند.
- اگر همه Variantها قیمت یکسان دارند یک قیمت نمایش داده شود؛ در غیر این صورت «از ...» یا بازه قیمت، بعد از تأیید Copy/UI.
- رنگ و فینیش در داده Variant ثبت می‌شوند اما تا زمان Rule رسمی قیمت را تغییر نمی‌دهند.
- 90×90 مربع فعلاً قیمت و امکان خرید قطعی ندارد.
- Checkout و Order creation آینده باید قیمت و availability را Server-side از Variant بازخوانی کنند و به Cart client اعتماد نکنند.

### معماری تصاویر پیشنهادی — NOT YET IMPLEMENTED

- Image Type عمومی: PRODUCT، LIFESTYLE و DETAIL.
- Product-level images برای Gallery و fallback اصلی.
- Presentation-level images برای نمونه‌های Listing و preselected visual combinations.
- Variant-level images فقط وقتی عکس دقیق همان ترکیب/سایز وجود دارد.
- Primary Image باید در scope مربوط مشخص شود و Sort Order/Alt Text Admin-driven باشد.
- اگر ترکیب انتخاب‌شده عکس اختصاصی دارد، Gallery به تصاویر دقیق Variant/Presentation سوییچ می‌کند.
- اگر ترکیب معتبر عکس اختصاصی ندارد، Gallery تصویر Product-level یا نزدیک‌ترین Presentation معتبر را بدون جعل تصویر حفظ می‌کند و UI باید به‌صورت ظریف روشن کند که تصویر نمایشی است.
- نبود عکس نباید Variant معتبر را غیرقابل‌خرید کند، مگر Business Rule جداگانه تعیین شود.
- محل ذخیره تصاویر Admin-uploaded هنوز مشخص نیست؛ Object Storage/CDN یا Persistent Media Storage باید پیش از Phase 13 انتخاب شود.

### رفتار پیشنهادی Product Detail — NOT YET IMPLEMENTED

- Presentation query ابتدا Optionهای تصویری مربوط را انتخاب می‌کند.
- انتخاب‌های مشتری فقط وقتی Add to Cart را فعال می‌کنند که دقیقاً به یک Variant active/purchasable برسند.
- تغییر Option قیمت، SKU، availability و تصویر را از Variant/Presentation data به‌روزرسانی می‌کند.
- توضیحات بلند و مشخصات از Database خوانده می‌شوند.
- Layout لوکس، Image-led و Editorial فعلی حفظ می‌شود و Option UI نباید به Marketplace-style matrix تبدیل شود.

### اثر روی Cart / Order / Invoice / Reports — NOT YET IMPLEMENTED

- Cart identity باید از productSlug به variantId یا productId+variantId تغییر کند.
- Cart باید selected option labels/values، SKU، unit price و presentation image را برای UX نگه دارد.
- Server هنگام Checkout باید Variant، price، purchasability و inventory را دوباره Validate کند.
- OrderItem باید Product/Variant/SKU/Name/Image/Price و Option selectionهای immutable را Snapshot کند.
- حذف یا تغییر Product/Variant نباید تاریخچه Order/Invoice را از بین ببرد.
- Invoice از Snapshotهای Order استفاده می‌کند و به Catalog زنده وابسته نمی‌شود.
- Collections عمدتاً Product-level باقی می‌مانند؛ Collection-level Presentation merchandising فقط در صورت نیاز آینده اضافه شود.
- isVipOnly فعلاً Product-level مناسب است؛ VIP در سطح Variant فقط با Business Rule جدید.
- Reports باید بتوانند فروش را بر اساس Product، Variant، Option Value و SKU تجمیع کنند.
- Inventory ترجیحاً Variant-level است؛ نوع tracked stock در برابر made-to-order هنوز Pending است.

### ریسک Migration و Strategy پیشنهادی

- SQLite برای حذف/تغییر ستون معمولاً table rebuild انجام می‌دهد؛ Migration یک‌مرحله‌ای برای Product پرریسک است.
- Strategy امن: ابتدا مدل‌ها و relationهای جدید Additive ایجاد شوند.
- اگر Product واقعی در Database وجود داشت، برای هر Product یک Default Variant از sku/priceToman/stock فعلی Backfill شود.
- Storefront/Cart ابتدا به read path جدید منتقل شوند.
- پس از QA و Snapshot migration، ستون‌های قدیمی Product در Migration جدا حذف شوند.
- OrderItemهای تاریخی نباید بازنویسی یا حذف شوند.
- در Development Database فعلی count جدول‌های Category، Subcategory، Collection، Product، ProductImage، ProductCollection و OrderItem همگی صفر است.
- قبل از Migration باید count واقعی Production/Development دوباره بررسی شود و خالی بودن Production فرض نشود.
- Migration باید روی DB خالی و Copy واقعی Database تست شود.

### ترتیب پیشنهادی ادامه Phase 12

1. Step 12B: تصمیم‌گیری Business/Architecture درباره taxonomy فرم، مدل نخست، SKU، Inventory policy، Availability و image storage.
2. Step 12C: طراحی نهایی Schema و Migration plan؛ سپس فقط با تأیید، Schema/Migration.
3. Step 12D: Database query/repository layer و import/seed idempotent داده رسمی ساعت.
4. Step 12E: اتصال Listing، Collection و Product Detail به Database و Variant/Presentation behavior.
5. Step 12F: ارتقای Cart به Variant-aware و آماده‌سازی Snapshotهای Order بدون شروع Payment.
6. Step 12G: QA کامل Desktop/Mobile، Migration، Catalog integrity و History handoff.
7. Admin CRUD واقعی در Phase 13 ساخته می‌شود؛ Phase 12 فقط foundation لازم را آماده می‌کند.

### Pending Decisions از Omid / Developer

- نام رسمی مدل نخست ساعت مربع و slug/code آن چیست؟
- آیا یک مدل طراحی می‌تواند هم مربع و هم گرد باشد یا هر فرم مدل تجاری جدا دارد؟
- آیا taxonomy عمومی از «ساعت دیواری مربع/گرد» به «ساعت دیواری + فیلتر فرم» تغییر کند؟
- وضعیت دقیق 90×90 مربع چیست: حذف موقت، نمایش Inquiry-only یا انتشار بعد از دریافت قیمت؟
- فهرست رسمی رنگ‌های بدنه، نام فارسی/لاتین و در صورت نیاز swatch value چیست؟
- آیا هر ترکیب رنگ/فینیش قابل سفارش است یا فقط ترکیب‌های مشخص؟
- SKU convention رسمی چیست و SKU برای Variant چگونه ساخته/مدیریت می‌شود؟
- Inventory مدل tracked stock است یا made-to-order؛ آیا stock برای همه محصولات معنی دارد؟
- آیا Variant بدون موجودی قابلیت سفارش/پیش‌سفارش دارد؟
- Copy دقیق نمایش قیمت‌های متفاوت در Listing چیست: «از»، بازه، یا Default Variant؟
- سه تصویر مربع دقیقاً به کدام Option Valueها تعلق دارند و کدام Primary است؟
- محل نهایی ذخیره/upload تصاویر Admin چیست؟
- متن رسمی «درباره محصول» و Alt Textهای تأییدشده چه هستند؟
- آیا Collection membership فقط Product-level است یا Presentation خاص هم ممکن است عضو Collection شود؟

------------------------------------------------------------------------

## PHASE 12 STEP 12A HANDOFF (ARCHIVED)

- **Last Updated:** 2026-10-06
- **Current Phase:** Phase 12 — Real Product & Catalog
- **Current Step:** Step 12A — Audit & Architecture
- **Current Status:** Audit و Architecture Proposal تکمیل شده و در انتظار تأیید است. تمام پیشنهادها NOT YET IMPLEMENTED هستند.
- **Last Approved Commit:** c907bb652cd8096b4cd303673c6f32b5c73aafc4 — feat(auth): complete real customer and admin authentication
- **Current Branch:** main
- **Working Tree Status:** فقط ARFAM-Gallery-Master-Project-History-FA.md به‌علت ثبت Step 12A تغییر Uncommitted دارد.

### Work Completed

- Prisma Schema فعلی و تمام مدل‌های Catalog/Order audit شدند.
- Mock Catalog، Site Structure، Product/Category/Subcategory/Collection routes و Product Detail بررسی شدند.
- Admin Products، image assets، Cart و Checkout dependencies بررسی شدند.
- داده‌های واقعی ساعت، قیمت‌ها، مشخصات، Presentation requirement و مورد 90×90 ثبت شدند.
- معماری عمومی Product/Variant/Option/Presentation/Image/Specification پیشنهاد شد.
- Migration risk و ترتیب امن Phase 12 ثبت شد.
- هیچ Implementation انجام نشد.

### Work in Progress

- هیچ کار اجرایی در حال انجام نیست.
- Step 12B شروع نشده است.
- معماری و Pending Decisions منتظر تأیید Omid/Developer هستند.

### Files Changed in Step 12A

- ARFAM-Gallery-Master-Project-History-FA.md

### Uncommitted Changes

- ARFAM-Gallery-Master-Project-History-FA.md — ثبت Audit، Architecture Proposal و Handoff فاز 12.
- هیچ Schema، Migration، Source code یا Asset تغییر نکرده است.

### Architecture Proposal — NOT YET IMPLEMENTED

- Product = مدل/طراحی تجاری.
- ProductVariant = ترکیب معتبر و قابل سفارش با SKU/Price/Inventory.
- ProductOption/ProductOptionValue = انتخاب‌های عمومی.
- VariantOptionValue = اتصال Variant به Option Valueها.
- ProductPresentation = نمونه بصری قابل نمایش در Listing و preset برای Product Detail.
- PresentationOptionValue = Optionهای تصویری ازپیش‌انتخاب‌شده.
- ProductImage = تصویر Product/Variant/Presentation با Type/Primary/Sort/Alt.
- ProductSpecification = مشخصات Admin-driven.
- Variant-aware Cart و OrderItem Option Snapshots.
- Square/Round به‌صورت Option پیشنهاد شده‌اند، اما تغییر taxonomy هنوز Pending Approval است.

### Known Issues

- Known intermittent Navigation Freeze از Phase 11 باقی است؛ Root Cause قطعی ندارد و workaround حدسی ممنوع است.
- Legacy/Demo Customer Recovery تا انتخاب SMS Provider و پیاده‌سازی Recovery واقعی باقی می‌ماند.
- Admin Products و Public Catalog هنوز Mock-driven هستند.
- تصویر رسمی ساعت در Repository فعلی Track نشده است.
- image upload/storage provider هنوز انتخاب نشده است.
- 90×90 مربع قیمت رسمی ندارد.

### QA / Verification

- git status، commit SHA و branch بررسی شدند.
- Prisma Schema، relations و onDeleteهای مرتبط read-only audit شدند.
- Public/Admin Catalog code و تمام Asset pathهای public بررسی شدند.
- Cart/Checkout dependency audit انجام شد.
- Aggregate countهای Catalog در Development Database به‌صورت read-only بررسی شدند و همگی صفر بودند.
- git diff --check پس از History update باید اجرا شود.
- هیچ Build/Lint لازم نیست چون Source code تغییر نکرده است.

### Pending Decisions

- تمام سؤال‌های بخش Pending Decisions از Omid / Developer.
- تأیید یا اصلاح معماری پیشنهادی.
- اجازه صریح برای Step 12B.
- انتخاب SMS Provider برای Password Recovery آینده مستقل از Phase 12 باقی است.
- Production Security pending items Phase 11 حفظ می‌شوند.

### Exact NEXT ACTION

- متوقف شو و Architecture Step 12A را برای تأیید ارائه کن.
- پس از تأیید، فقط Step 12B و تصمیم‌های Business/Schema صریحاً مجازشده را آغاز کن.
- بدون تأیید Schema یا Migration ایجاد نکن.

### DO NOT CHANGE / Locked Decisions

- Luxury Brand Experience First — E-Commerce Second.
- طراحی، Typography، Motion، Official Logo، Signature Background، Header/Footer و Responsive behavior تأییدشده بدون ضرورت تغییر نکنند.
- Real Auth، Admin authorization، First Admin Setup و Footer Admin Entry Phase 11 تغییر نکنند.
- قیمت‌ها Integer Toman هستند.
- اطلاعات تجاری تأییدنشده به Business Rule قطعی تبدیل نشوند.
- برای رنگ، فینیش، فرم یا سایز فیلد خاص ساعت ساخته نشود.
- Product cardهای تصویری به Product تکراری Database تبدیل نشوند.
- Background تصاویر رسمی فعلاً تغییر نکند و تصویر جعلی ساخته نشود.
- Payment، Invoice، Wallet، VIP، Admin CRUD و Phase 13 شروع نشوند.
- Known Navigation issue بدون Evidence با workaround حدسی تغییر نکند.

### How to Resume

1. git status و Last Approved Commit را بررسی کن.
2. این Step را Architecture-only و NOT YET IMPLEMENTED در نظر بگیر.
3. پاسخ Omid/Developer به Pending Decisions را ثبت کن.
4. قبل از Schema design نهایی، taxonomy فرم، Product model boundaries، SKU، Inventory و image storage را تعیین تکلیف کن.
5. Step 12B را فقط با دستور صریح شروع کن.
6. هر واحد معنادار کار را در همین History/Handoff ثبت کن.
7. بدون تأیید User Commit یا Push نکن.
------------------------------------------------------------------------

## PHASE 12 — STEP 12B ARCHITECTURE DECISIONS

### Status

- تاریخ: 2026-10-06
- Step 12B فقط Design Decision و Schema Blueprint است.
- Prisma Schema، Migration، Runtime code، UI و Assetها تغییر نکردند.
- تمام مدل‌ها و فیلدهای این بخش تا شروع Step 12C وضعیت NOT YET IMPLEMENTED دارند.

### Final Product Boundary Decision — NOT YET IMPLEMENTED

- Product نماینده یک مدل/طراحی تجاری مستقل است، نه یک تصویر، رنگ یا SKU.
- ProductModel table جدا در معماری فعلی لازم نیست؛ خود Product نقش مدل تجاری را دارد.
- اولین ساعت مربع به‌عنوان یک Product مستقل مدل می‌شود؛ نام رسمی مدل هنوز Pending است.
- ساعت گرد به همان Product مربع اجباراً متصل نمی‌شود.
- اگر مدل گرد طراحی، مشخصات یا Optionهای متفاوت داشته باشد، Product مستقل خواهد بود.
- فقط اگر Omid بعداً تأیید کند مربع و گرد دو فرم از دقیقاً یک مدل تجاری هستند، فرم می‌تواند ProductOption همان Product باشد.
- معماری Option عمومی این سناریو را پشتیبانی می‌کند و هیچ فیلد Clock-specific نیاز نیست.

### Final Taxonomy Decision — NOT YET IMPLEMENTED

- Category و Subcategory فعلی حفظ می‌شوند و در Step 12B تغییر نمی‌کنند.
- اولین Product مربع می‌تواند فعلاً زیر Category ساعت و Subcategory ساعت دیواری مربع قرار بگیرد.
- مربع/گرد به‌صورت global و اجباری نه Product هستند و نه Option.
- مرز Product و Option بر اساس مدل تجاری هر محصول تعیین می‌شود.
- تبدیل Routeهای مربع/گرد به Filtered Landing در آینده ممکن است، اما اکنون تصمیم قطعی یا Scope Step 12C نیست.

### Final Proposed Prisma Models — NOT YET IMPLEMENTED

#### Existing Models to Keep

- Category: دسته اصلی Catalog.
- Subcategory: زیرساخت navigation و merchandising؛ تعلق آن به Category باید در Application Layer Validate شود.
- Collection: مجموعه editorial قابل مدیریت.
- ProductCollection: عضویت چندبه‌چند Product در Collection با Sort Order.
- Product: مدل/طراحی تجاری، محتوای اصلی، وضعیت انتشار و VIP.
- OrderItem: Snapshot تجاری؛ در آینده Variant-aware می‌شود.

#### Product

مسئولیت نهایی:

- identity مدل تجاری.
- categoryId و subcategoryId.
- name، slug و در صورت نیاز productCode مستقل از SKU.
- shortDescription برای Listing/SEO.
- longDescription برای متن رسمی درباره محصول.
- isActive، isPublished، publishedAt و isVipOnly.
- Product-level fallback media و specifications از relationها.
- sku، priceToman و stock فعلی فقط Legacy fields هستند و منبع نهایی Catalog جدید نخواهند بود.

#### ProductVariant

مسئولیت نهایی:

- یک ترکیب معتبر قابل سفارش از Option Valueها.
- productId.
- sku به‌صورت String unique؛ convention آن Pending است.
- priceToman به‌صورت Integer و required برای Variant قابل‌خرید.
- position، isActive و isPurchasable.
- جایگاه عمومی برای inventoryPolicy و stockQuantity nullable، بدون تعریف رفتار تجاری تا زمان تصمیم.
- combinationKey پایدار برای جلوگیری از Variant تکراری در یک Product؛ نحوه تولید دقیق آن در Application Layer Step 12C تعریف می‌شود.
- ProductVariant فقط ترکیب معتبر است؛ تمام Cartesian combinationها خودکار معتبر نیستند.

#### ProductOption

مسئولیت نهایی:

- تعریف محور انتخاب عمومی برای یک Product.
- نمونه‌ها: سایز، رنگ بدنه، فینیش، متریال یا فرم در Productهایی که فرم واقعاً انتخاب است.
- productId، name، slug، position، isRequired و displayType عمومی.
- هیچ Option خاص ساعت در Schema ساخته نمی‌شود.

#### ProductOptionValue

مسئولیت نهایی:

- مقدار Admin-driven یک ProductOption.
- optionId، label، slug، position، isActive.
- swatchValue یا presentation metadata می‌تواند nullable باشد و فقط برای UI مناسب استفاده شود.
- Value به‌تنهایی قیمت ندارد و وجود آن به معنی قابل‌خرید بودن ترکیب نیست.

#### VariantOptionValue

مسئولیت نهایی:

- Join بین ProductVariant و ProductOptionValue.
- انتخاب‌های سازنده هر Variant را ثبت می‌کند.
- Application validation باید تضمین کند Value متعلق به Option همان Product است.
- هر Variant برای هر Option required باید دقیقاً یک Value داشته باشد.
- Duplicate combination باید رد شود.

#### ProductPresentation

مسئولیت نهایی:

- نمونه بصری/مرچندایزینگ برای Listing و Product Detail preset.
- Presentation نه Product است، نه Variant و نه SKU.
- productId، slug، title اختیاری، position، isActive و showInListing.
- سه نمونه تیره/طلایی، تیره/سیلور و تیره/دودی سه Presentation از Product مربع هستند.
- Presentation می‌تواند فقط Optionهای بصری مثل رنگ و فینیش را preselect کند و لازم نیست سایز داشته باشد.

#### PresentationOptionValue

مسئولیت نهایی:

- Join بین ProductPresentation و ProductOptionValue.
- Optionهای ازپیش‌انتخاب‌شده هر نمونه تصویری را ثبت می‌کند.
- کلیک Listing از این داده برای preselect کردن Product Detail استفاده می‌کند.

#### ProductImage

مسئولیت نهایی:

- همه تصاویر Catalog با Product مالک اصلی.
- productId required.
- variantId nullable برای تصویر دقیق یک Variant.
- presentationId nullable برای تصویر یک Presentation.
- imageType عمومی: PRODUCT، LIFESTYLE یا DETAIL.
- url، storageKey nullable/provider-neutral، altText، position و isPrimary.
- Provider خاص در Schema hardcode نمی‌شود.
- Application validation باید تضمین کند Variant/Presentation متعلق به همان Product است.
- Primary uniqueness در scope Product/Variant/Presentation باید در Application Layer یا constraint مناسب Step 12C کنترل شود.

#### ProductSpecification

مسئولیت نهایی:

- مشخصات فنی Admin-driven و category-agnostic.
- productId، label، value، group nullable و position.
- مواردی مانند فلز، استیل 304، ضخامت 1 میلی‌متر، موتور، ضمانت، بسته‌بندی و کشور تولید در داده ثبت می‌شوند، نه React component.
- اگر در آینده Specification definitionهای مشترک دسته‌ای لازم شد، مدل definition جدا می‌تواند بعد از نیاز واقعی اضافه شود؛ اکنون Overengineering نمی‌شود.

#### OrderItemOptionSnapshot

مسئولیت نهایی:

- Snapshot immutable انتخاب‌های خرید.
- orderItemId، optionName، optionValue، optionSlugSnapshot nullable، valueSlugSnapshot nullable و position.
- گزارش و Invoice را از Catalog زنده مستقل می‌کند.
- OrderItem در آینده variantId nullable با onDelete: SetNull و variantSkuSnapshot خواهد داشت.

### Final Model Relationships — NOT YET IMPLEMENTED

- Category 1 → N Subcategory.
- Category 1 → N Product.
- Subcategory 1 → N Product.
- Product N ↔ N Collection از طریق ProductCollection.
- Product 1 → N ProductVariant.
- Product 1 → N ProductOption.
- ProductOption 1 → N ProductOptionValue.
- ProductVariant N ↔ N ProductOptionValue از طریق VariantOptionValue.
- Product 1 → N ProductPresentation.
- ProductPresentation N ↔ N ProductOptionValue از طریق PresentationOptionValue.
- Product 1 → N ProductImage.
- ProductVariant 1 → N ProductImage به‌صورت optional scope.
- ProductPresentation 1 → N ProductImage به‌صورت optional scope.
- Product 1 → N ProductSpecification.
- OrderItem N → 0..1 ProductVariant با SetNull.
- OrderItem 1 → N OrderItemOptionSnapshot.

### Final Pricing Decision — NOT YET IMPLEMENTED

- منبع قطعی قیمت، ProductVariant.priceToman است.
- قیمت Integer Toman باقی می‌ماند.
- ProductOptionValue هیچ price delta ندارد.
- تفاوت قیمت رنگ یا فینیش فرض نمی‌شود.
- برای Variant قابل‌خرید priceToman الزامی است.
- مربع 65×65، 80×80 و 100×100 Variantهای جدا با قیمت‌های تأییدشده خواهند بود.
- برای 90×90 هیچ ProductVariant قابل‌خرید و هیچ قیمت ساخته نمی‌شود.
- اینکه 90×90 به‌صورت Option disabled یا فقط Specification دیده شود Pending UI/Business decision است.
- Copy و روش نمایش اختلاف قیمت در Listing همچنان Pending است؛ Architecture امکان min/max و matching-variant price را فراهم می‌کند.

### Final Image and Fallback Decision — NOT YET IMPLEMENTED

- Product-level image fallback پایه Gallery است.
- Presentation-level image نمونه بصری Listing و preset است.
- Variant-level image فقط برای عکس دقیق همان Variant استفاده می‌شود.
- اولویت Gallery پس از انتخاب: exact Variant images، سپس matching Presentation images، سپس Product-level images.
- در نبود تصویر دقیق، تصویر جعلی یا composited ساخته نمی‌شود.
- UI باید در صورت نیاز به‌صورت ظریف روشن کند تصویر Product/Presentation نمایشی است.
- تصاویر واقعی Omid بدون تغییر Background استفاده می‌شوند.
- URL/storageKey provider-neutral هستند و انتخاب Production Storage Provider Pending می‌ماند.

### Final Listing Behavior — NOT YET IMPLEMENTED

- Query هر Product، ProductPresentationهای active و showInListing را دریافت می‌کند.
- هر Presentation یک کارت تصویری مستقل با Primary Presentation image می‌سازد.
- هر کارت به Product canonical route با presentation slug/preset لینک می‌شود.
- Product Detail PresentationOptionValueها را preselect می‌کند.
- Presentation فاقد Product یا SKU مستقل است و SEO/canonical identity روی Product باقی می‌ماند.
- اگر Product هیچ Presentation قابل Listing نداشت، یک کارت Product-level با Primary Product image نمایش داده می‌شود.
- قیمت‌های قابل استخراج برای هر کارت از Variantهای سازگار با Presentation محاسبه می‌شوند؛ Copy نمایش قیمت Pending است.

### Future Product Readiness

- هر Product Optionهای مخصوص خود را دارد؛ Product گرد مجبور به reuse کردن Optionهای مربع نیست.
- مدل‌های جدید مربع Productهای مستقل با Variant/Presentationهای خود خواهند بود.
- میز، روشنایی، اکسسوری و سرویس پذیرایی بدون Schema اختصاصی از همین ساختار استفاده می‌کنند.
- Optionهایی مانند متریال فقط در Productهایی تعریف می‌شوند که واقعاً انتخاب مشتری هستند.
- ویژگی توصیفی غیرقابل‌انتخاب در ProductSpecification قرار می‌گیرد.
- افزودن Product، Option، Variant، Presentation، Spec و Image در Phase 13 باید Admin-driven باشد و تغییر کد نخواهد خواست.

### Deliberately Pending Business Decisions

- نام رسمی Product/مدل نخست ساعت مربع.
- productCode و SKU convention.
- فهرست رسمی رنگ‌های بدنه و swatchها.
- معتبر بودن تمام یا بخشی از ترکیب‌های رنگ و فینیش.
- مدل تجاری دقیق ساعت گرد و اینکه Product مستقل است یا Option همان مدل.
- رفتار نمایشی 90×90 بدون قیمت.
- Listing price copy و انتخاب default Variant.
- Inventory policy values و رفتار Made-to-order/Tracked stock.
- رفتار Out-of-stock، Preorder و Backorder.
- Production Image Storage Provider و URL lifecycle.
- Primary image نهایی و Alt Text تصاویر رسمی.
- متن نهایی About Product.
- نیاز واقعی Collection به Presentation-level merchandising.
- هیچ‌یک از این موارد در Step 12B به Rule قطعی تبدیل نشدند.

### Exact Step 12C Plan — Schema + Migration Only

1. Preflight read-only:
   - git status و commit baseline.
   - count همه جدول‌های Catalog/Order.
   - Backup یا Copy از Development DB برای Migration rehearsal.
   - تأیید عدم وجود Product/OrderItem واقعی قبل از هر destructive cleanup.
2. Prisma Schema additive update:
   - افزودن ProductVariant، ProductOption، ProductOptionValue و VariantOptionValue.
   - افزودن ProductPresentation و PresentationOptionValue.
   - توسعه additive ProductImage.
   - افزودن ProductSpecification.
   - افزودن OrderItemOptionSnapshot و variantId nullable به OrderItem.
   - افزودن index/uniqueهای لازم برای slug، SKU، ordering و queryهای publish.
3. Legacy compatibility:
   - sku، priceToman و stock فعلی Product در Migration اول حذف نمی‌شوند.
   - این ستون‌ها deprecated باقی می‌مانند تا Runtime read path در Stepهای بعد منتقل شود.
4. Migration:
   - ساخت یک Migration additive و review کامل SQL تولیدشده.
   - هیچ Product، Variant یا Seed رسمی داخل Migration hardcode نمی‌شود.
5. Backfill preparation:
   - اگر هر Product legacy وجود داشت، plan/script idempotent برای Default Variant تعریف و جداگانه review می‌شود.
   - با توجه به Development DB فعلی که Catalog آن صفر است، Backfill آنجا no-op خواهد بود.
   - Production هرگز خالی فرض نمی‌شود.
6. Integrity validation:
   - category/subcategory ownership.
   - option/value/product ownership.
   - unique SKU و duplicate combination.
   - Presentation option ownership.
   - ProductImage scope ownership.
   - purchasable Variant باید قیمت معتبر داشته باشد.
7. Migration QA:
   - prisma format، validate و generate.
   - migrate روی DB خالی.
   - migrate روی Copy واقعی Development DB.
   - migration status.
   - lint، typecheck، production build و git diff --check.
8. Handoff:
   - History بعد از Step 12C به‌روزرسانی می‌شود.
   - هیچ Storefront query، Cart change، Seed data یا Admin CRUD در Step 12C شروع نمی‌شود.
   - حذف legacy Product fields فقط بعد از انتقال Runtime و QA در Migration بعدی مجاز است.

------------------------------------------------------------------------

## HANDOFF ARCHIVE — AFTER STEP 12B

- **Last Updated:** 2026-10-06
- **Current Phase:** Phase 12 — Real Product & Catalog
- **Current Step:** Step 12B — Product/Catalog Architecture Decisions
- **Current Status:** معماری نهایی پیشنهادی و Plan دقیق Step 12C تکمیل شده و در انتظار تأیید است. هیچ بخش آن هنوز پیاده‌سازی نشده است.
- **Last Approved Commit:** c907bb652cd8096b4cd303673c6f32b5c73aafc4 — feat(auth): complete real customer and admin authentication
- **Current Branch:** main
- **Working Tree Status:** فقط ARFAM-Gallery-Master-Project-History-FA.md شامل تغییرات Uncommitted Step 12A و 12B است.

### Work Completed

- Product boundary، Variant، Option، Presentation، Image و Specification responsibilities نهایی شدند.
- ProductPresentation برای Listing تصویری Omid حفظ و نهایی شد.
- قیمت Variant-level و بدون Option price delta نهایی شد.
- Image fallback chain و provider-neutral storage design نهایی شد.
- معماری Productهای آینده و Product مستقل احتمالی ساعت گرد تثبیت شد.
- Plan additive و کم‌ریسک Step 12C نوشته شد.
- هیچ Schema، Migration یا Runtime implementation انجام نشد.

### Work in Progress

- هیچ کار اجرایی در حال انجام نیست.
- Step 12C شروع نشده است.
- معماری Step 12B منتظر تأیید User است.

### Files Changed

- ARFAM-Gallery-Master-Project-History-FA.md

### Uncommitted Changes

- History شامل Audit Step 12A، تصمیم‌های Step 12B و Current Handoff است.
- هیچ Source code، Prisma Schema، Migration یا Asset تغییر نکرده است.

### Final Architecture — NOT YET IMPLEMENTED

- Product = مدل/طراحی تجاری.
- ProductVariant = ترکیب معتبر قابل سفارش با SKU و Variant price.
- ProductOption/ProductOptionValue = انتخاب‌های عمومی هر Product.
- VariantOptionValue = ترکیب Option Valueهای Variant.
- ProductPresentation/PresentationOptionValue = کارت تصویری Listing و Detail preset.
- ProductImage = media در scope Product/Variant/Presentation.
- ProductSpecification = توضیحات فنی Admin-driven.
- OrderItemOptionSnapshot = Snapshot immutable انتخاب‌ها.
- Product گرد به Product مربع اجباراً متصل نیست.
- فرم فقط وقتی Option است که واقعاً انتخاب داخل همان مدل باشد.

### Known Issues / Preserved Items

- Navigation Freeze همچنان Known/Intermittent است و در این Step بررسی یا تغییر نکرد.
- Legacy/Demo Customer Recovery و Password Recovery pending Phase 11 حفظ شده‌اند.
- Public/Admin Catalog هنوز Mock-driven است.
- هیچ تصویر رسمی ساعت در Repository Track نشده است.
- 90×90 مربع قیمت ندارد و قابل خرید نیست.
- Production image storage و Inventory policy هنوز Pending هستند.

### QA / Verification

- فقط Documentation تغییر کرده است.
- git status و baseline commit بررسی شدند.
- Schema و Catalog dependencies از Step 12A مبنا قرار گرفتند.
- git diff --check پس از History update باید اجرا شود.
- Lint/Build لازم نیست چون Runtime code تغییر نکرده است.

### Pending Decisions

- موارد بخش Deliberately Pending Business Decisions.
- تأیید Step 12B.
- اجازه صریح برای Step 12C.
- SMS Provider و Production Security pending items خارج از Scope Phase 12 حفظ می‌شوند.

### Exact NEXT ACTION

- متوقف شو و Step 12B را برای تأیید ارائه کن.
- پس از تأیید، فقط Step 12C — Prisma Schema + Additive Migration را طبق Plan ثبت‌شده آغاز کن.
- Storefront، Cart، Seed و Admin CRUD را در Step 12C شروع نکن.

### DO NOT CHANGE / Locked Decisions

- Luxury Brand Experience First — E-Commerce Second.
- UI، Typography، Motion، Logo، Signature Background، Header/Footer و Responsive design بدون ضرورت تغییر نکنند.
- Authentication و Authorization Phase 11 تغییر نکنند.
- Integer Toman و Variant-level pricing.
- ProductPresentation برای Listing تصویری و جلوگیری از Product تکراری.
- Option architecture عمومی و بدون clock-specific fields.
- تصاویر رسمی بدون تغییر Background و بدون تولید تصویر جعلی.
- Unknown Business Rules اختراع نشوند.
- Schema/Migration قبل از تأیید Step 12B تغییر نکند.
- Phase 13 Admin CRUD، Payment، Invoice، Wallet و VIP implementation شروع نشوند.

### How to Resume

1. git status و baseline commit c907bb652cd8096b4cd303673c6f32b5c73aafc4 را بررسی کن.
2. Step 12A و 12B را Documentation/Architecture-only و NOT YET IMPLEMENTED در نظر بگیر.
3. تأیید User و پاسخ Pending Decisions را ثبت کن.
4. Step 12C را فقط با دستور صریح آغاز کن.
5. Migration اول را additive نگه دار و legacy Product fields را حذف نکن.
6. Migration را روی DB خالی و Copy واقعی تست کن.
7. هیچ Seed یا Runtime Catalog implementation را وارد Step 12C نکن.
8. History را بعد از هر واحد معنادار کار به‌روزرسانی کن.
9. بدون تأیید User Commit یا Push نکن.

------------------------------------------------------------------------

## PHASE 12 — STEP 12C PRODUCT/CATALOG SCHEMA + MIGRATION

### Status

- تاریخ اجرا: 2026-10-06
- وضعیت: تکمیل شده و QA موفق؛ در انتظار تأیید Commit/Push.
- Scope فقط Prisma Schema، Migration، مستند Prisma و History بوده است.
- Storefront، Cart، Checkout، Admin CRUD، Seed/Import، Product Listing و Product Detail تغییر نکردند.

### Preflight and Database Safety

- Branch و baseline تأییدشده: `main` روی `c907bb652cd8096b4cd303673c6f32b5c73aafc4`.
- تغییرات مستند Stepهای 12A/12B حفظ شدند.
- پیش از Migration یک SQLite backup سازگار در `data/backups/arfam-pre-phase12c-20261006-191541.db` ساخته شد؛ مسیر `data/` در Git ignored است.
- integrity backup برابر `ok` بود؛ در زمان Preflight تعداد Product و OrderItem صفر بود.
- دیتابیس توسعه موجود Reset، Revert یا حذف نشد.

### Implemented Schema

- `ProductVariant`: Variant معتبر قابل سفارش با SKU unique، `priceToman` اجباری و Integer Toman، `combinationKey` یکتا در Product، ترتیب، active/purchasable state و extension pointهای nullable برای Inventory آینده.
- `ProductOption` و `ProductOptionValue`: Optionهای عمومی و Admin-driven بدون فیلد Clock-specific و بدون price delta.
- `VariantOptionValue`: اتصال چندبه‌چند Variant به Option Valueها.
- `ProductPresentation` و `PresentationOptionValue`: preset تصویری Listing/Product Detail بدون Product، Variant یا SKU تکراری.
- `ProductSpecification`: مشخصات فنی عمومی، مرتب‌شونده و دارای group اختیاری.
- `ProductImage`: scope اجباری Product و scope اختیاری Variant/Presentation، `imageType` با مقادیر PRODUCT/LIFESTYLE/DETAIL، `url` و `storageKey` provider-neutral، alt، primary و position.
- `OrderItem`: `variantId` nullable با `onDelete: SetNull` و `variantSkuSnapshot` nullable اضافه شد؛ Snapshotهای قبلی حفظ شدند.
- `OrderItemOptionSnapshot`: Snapshot مستقل و immutable نام/مقدار Option و slugهای اختیاری.
- `Product.shortDescription` و `Product.longDescription` اضافه شدند.
- فیلدهای Legacy یعنی `Product.sku`، `Product.priceToman` و `Product.stock` عمداً حذف نشدند.

### Migration

- Migration جدید: `20261006194507_product_catalog_foundation`.
- Migration فقط تغییرات Schema و کپی ایمن ردیف‌های موجود در redefineهای لازم SQLite را دارد؛ هیچ Product، Variant، Option، Presentation، تصویر یا داده تجاری Seed/Backfill نشده است.
- یک drift قدیمی Phase 10 شناسایی شد: فایل init شامل `Order.deletedAt` بود اما checksum ثبت‌شده دیتابیس و Schema واقعی توسعه مربوط به نسخه پیش از آن بود.
- `20260930142010_init/migration.sql` به checksum واقعاً اعمال‌شده `ba26b9e1ac2dcb227af1eff10fdc6b62d1c274a7a0fc68459d8328fb36b65c83` بازگردانده شد.
- `Order.deletedAt` و index آن به Migration جدید منتقل شدند؛ بنابراین هم دیتابیس‌های موجود و هم نصب کاملاً خالی مسیر Migration یکسان و قابل تکرار دارند.
- SQL جدید additive است؛ redefinitionهای `OrderItem` و `ProductImage` محدودیت فنی SQLite برای افزودن relation/FK هستند و ردیف‌های قدیمی را با `INSERT ... SELECT` حفظ می‌کنند.

### Final Safety Review — Approved

- تاریخ تأیید: 2026-10-07.
- User تأیید کرد Development DB بررسی‌شده تنها دیتابیس شناخته‌شده‌ای است که Migrationهای پروژه روی آن اجرا شده‌اند و هیچ Production، Staging یا CI Database فعالی وجود ندارد.
- نسخه Repository پیش از Step 12C دارای `Order.deletedAt` با checksum برابر `6a2fc49c3a6ddc9020482fe6e2d8a8d706367ad35fe09c01aceaff1765a28bdc` بود، اما Development DB نسخه اولیه واقعی بدون این ستون و با checksum برابر `ba26b9e1ac2dcb227af1eff10fdc6b62d1c274a7a0fc68459d8328fb36b65c83` را اجرا کرده بود.
- Root cause این بود که Migration اولیه در Phase 10 پس از اجرا ویرایش شده بود، بدون اینکه Development DB reset یا یک Migration forward جدید دریافت کند.
- تصمیم نهایی تأییدشده: فایل init روی checksum واقعاً اجراشده `ba26...` باقی بماند و `Order.deletedAt` همراه index آن فقط در Migration forward جدید Step 12C ایجاد شود.
- این مسیر برای Development DB موجود و نصب جدید آزموده و موفق است؛ با توجه به نبود هر دیتابیس شناخته‌شده با checksum `6a2...`، ریسک شناخته‌شده Deploy باقی نمانده است.
- ساختار Schema و Migration Step 12C پس از Safety Review بدون تغییر بیشتر تأیید شد.

### Application-layer Integrity Rules

- تعلق Subcategory به Category باید هنگام create/update Product Validate شود.
- Option Value، Variant، Presentation و image scope باید متعلق به همان Product باشند.
- هر Variant برای هر Option required دقیقاً یک Value داشته باشد.
- `combinationKey` canonical باید duplicate Variant را رد کند؛ الگوریتم دقیق آن در write layer تعیین می‌شود.
- Variant قابل‌خرید باید قیمت معتبر Toman داشته باشد.
- ProductImage باید حداقل یک locator قابل resolve از `url` یا `storageKey` داشته باشد و primary uniqueness در scope توسط write layer enforce شود.
- Catalog edit نباید Snapshotهای تاریخی OrderItem را بازنویسی کند.

### Backfill Plan

- هیچ Backfill در Step 12C اجرا نشد و هیچ SKU یا ترکیب ساختگی تولید نشد.
- اگر محیط دیگری Product legacy بدون Variant داشته باشد، Backfill باید بعد از تصویب SKU/Inventory rules به‌صورت idempotent و جداگانه review شود.
- حذف فیلدهای Legacy فقط پس از انتقال کامل read/write pathهای Storefront، Cart، Checkout و Order و QA مجاز است.

### QA Results

- Prisma format: PASS.
- Prisma validate: PASS.
- Prisma generate با Prisma Client 7.10.0: PASS؛ generated client ignored و Untracked/Tracked نشده است.
- Migration روی دیتابیس خالی: PASS؛ هر دو Migration اعمال شدند، status up to date و integrity برابر `ok`.
- Migration روی کپی واقعی Development DB: PASS؛ دو User موجود حفظ شدند، Product/OrderItem صفر باقی ماند و integrity برابر `ok`.
- Migration روی Development DB پس از Backup: PASS؛ status up to date، schema diff خالی و integrity برابر `ok`.
- Lint: PASS.
- Type Check: PASS.
- Production Build: PASS؛ 67 صفحه static/dynamic بدون خطا تولید شد.
- `git diff --check`: PASS.

### Deliberately Pending

- نام رسمی مدل ساعت، productCode و SKU convention.
- رنگ‌های رسمی آینده، Swatchها و تمام ترکیب‌های معتبر رنگ/فینیش.
- جزئیات ساعت گرد و تصمیم نهایی Product/Option آن.
- رفتار 90×90 بدون قیمت؛ هیچ Variant قابل‌خرید یا قیمت برای آن ساخته نشده است.
- Listing price copy و default Variant.
- Inventory/Made-to-order policy و Out-of-stock/Preorder behavior.
- Production Image Storage Provider، URL lifecycle و Alt Textهای نهایی.
- اطلاعات و تصاویر واقعی ساعت، Seed/Import، runtime query layer و Admin CRUD.

------------------------------------------------------------------------

## HANDOFF ARCHIVE — AFTER STEP 12C

- **Last Updated:** 2026-10-07
- **Current Phase:** Phase 12 — Real Product & Catalog
- **Current Step:** Step 12C — Product/Catalog Schema + Additive Migration
- **Current Status:** Step 12C و Safety Review تأیید نهایی شدند؛ آماده Commit/Push با پیام `feat(catalog): add real product catalog foundation`. Step 12D شروع نشده است.
- **Last Approved Commit:** c907bb652cd8096b4cd303673c6f32b5c73aafc4 — feat(auth): complete real customer and admin authentication
- **Current Branch:** main
- **Working Tree Status:** تغییرات تأییدشده Stepهای 12A تا 12C آماده Commit هستند؛ هیچ تغییر Storefront، Cart، Admin یا داده محصول در Scope نیست.

### Files Changed

- `ARFAM-Gallery-Master-Project-History-FA.md`
- `prisma/schema.prisma`
- `prisma/README.md`
- `prisma/migrations/20260930142010_init/migration.sql`
- `prisma/migrations/20261006194507_product_catalog_foundation/migration.sql`

### Known Issues

- Navigation Freeze همان Known/Intermittent قبلی است و در Step 12C بررسی یا تغییر نکرد.
- Public/Admin Catalog هنوز Mock-driven است؛ Schema جدید هنوز به Runtime متصل نشده است.
- Legacy Product fields موقتاً باقی مانده‌اند و باید پس از مهاجرت runtime حذف شوند.
- Password Recovery و Production security pendingهای قبلی Phase 11 حفظ شده‌اند.

### Exact NEXT ACTION

- تغییرات تأییدشده Stepهای 12A تا 12C با پیام `feat(catalog): add real product catalog foundation` روی `main` Commit و به `origin/main` Push شوند.
- پس از Push متوقف شو و Step 12D را صرفاً با دستور صریح جداگانه شروع کن.

### DO NOT CHANGE

- Luxury UI، Storefront، Product routes، Cart، Checkout، Auth/Admin behavior، Logo، Signature Background، Motion و Responsive design.
- Variant-level Integer Toman pricing و ProductPresentation architecture.
- تصاویر رسمی بدون تغییر Background و بدون تولید تصویر جعلی.
- هیچ SKU، Inventory rule، Variant combination، قیمت 90×90 یا Storage Provider اختراع نشود.
- در Step 12C هیچ Seed، Product data، Admin CRUD یا Runtime Catalog integration اضافه نشود.

### How to Resume

1. `git status` و diff پنج مسیر ثبت‌شده بالا را بررسی کن.
2. Migration SQL و checksum baseline init را دوباره تأیید کن.
3. نتایج Prisma/Lint/Type Check/Build/diff-check این Handoff را مبنا قرار بده.
4. تأیید Commit/Push در 2026-10-07 صادر شده است؛ بعد از Push وضعیت sync و clean بودن Working Tree را گزارش کن.
5. Step 12D را فقط با درخواست مستقل آغاز کن.

------------------------------------------------------------------------

## PHASE 12 — STEP 12D-1 FIRST REAL ARFAM PRODUCT IMPORT

### Status

- تاریخ اجرا: 2026-10-07.
- وضعیت: پیاده‌سازی، QA و نتیجه Step 12D-1 توسط User تأیید نهایی شده‌اند؛ آماده Commit/Push.
- اولین Product واقعی ARFAM در Development Database ثبت شد.
- Scope فقط nullable SKU migration، import idempotent داده رسمی ساعت مربع و مستندات است.
- Storefront، Cart، Checkout، Admin CRUD و تصاویر تغییر نکردند؛ Step 12D-2 شروع نشده است.

### Nullable SKU Decision and Migration

- هنگام شروع import مشخص شد `Product.sku` و `ProductVariant.sku` required هستند، درحالی‌که SKU رسمی هنوز تعیین نشده و ساخت SKU موقت/تجاری ممنوع است.
- با تأیید صریح User هر دو فیلد به `String? @unique` تغییر کردند؛ SKU همچنان در صورت وجود unique است و چند رکورد بدون SKU می‌توانند `null` داشته باشند.
- Migration جدید: `20261007164151_allow_null_catalog_sku`.
- Migration با redefinition ایمن SQLite مقدار تمام SKUهای موجود را حفظ می‌کند و فقط nullability را آزاد می‌کند.
- Backup پیش از Migration: `data/backups/arfam-pre-step12d1-nullable-sku-20261007.db`؛ مسیر `data/` Git ignored است.
- Migration روی دیتابیس خالی و کپی واقعی Development DB آزمایش شد؛ integrity برابر `ok`، foreign key error برابر صفر و تعداد Product/Variant پیش از import صفر بود.

### Idempotent Import

- Import source: `prisma/imports/official-square-wall-clock.mjs`.
- Command: `npm run catalog:import:square-clock`.
- Import فقط پس از تأیید applied بودن Migration nullable SKU اجرا می‌شود، داخل transaction است و اجرای دوباره duplicate ایجاد نمی‌کند.
- اجرای دوم idempotency نیز انجام شد و تمام countها ثابت ماندند.

### Records Created

- Category: یک رکورد `ساعت` با slug موجود سایت `clocks`.
- Subcategory: یک رکورد `ساعت دیواری مربع` با slug موجود سایت `square-wall-clocks`.
- Product: یک رکورد با نام عمومی و واقعی `ساعت دیواری مربع`.
- Product internal id: `product_square_wall_clock`.
- Product temporary internal slug: `internal-square-wall-clock`؛ این مقدار نام رسمی مدل نیست و Product فعلاً unpublished است.
- Product `model = null` و `sku = null` باقی ماندند.
- Product legacy `priceToman = 9,800,000` فقط برای سازگاری ستون Legacy و از پایین‌ترین قیمت رسمی استفاده می‌کند؛ منبع قیمت Catalog، Variant است.
- Product legacy `stock = 0` است؛ هیچ Inventory/Made-to-order rule از آن استنتاج نمی‌شود.
- متن رسمی پنج‌پاراگرافی Product بدون بازنویسی در `longDescription` ذخیره و exact-match آن در QA تأیید شد.

### Options and Values

- Option required `سایز` با slug داخلی `size`.
- سه Value رسمی: `65×65 سانتی‌متر`، `80×80 سانتی‌متر` و `100×100 سانتی‌متر`.
- Option required `فینیش استیل` با slug داخلی `steel-finish`.
- سه Value رسمی: `طلایی`، `سیلور` و `دودی`.
- هیچ Color Option یا Color Value ساخته نشد، زیرا نام و کد رسمی رنگ بدنه هنوز تأیید نشده است.
- `90×90` هیچ Option Value، Variant یا قیمت ندارد و Pending باقی مانده است.

### Variants and Prices

- ۹ Variant معتبر از سه سایز × سه فینیش ساخته شد.
- هر Variant دقیقاً دو Option Value دارد: یک سایز و یک فینیش.
- هر ۹ مقدار `ProductVariant.sku` برابر `null` است؛ هیچ SKU موقت یا ساختگی تولید نشد.
- سه Variant سایز `65×65`، هرکدام `9,800,000` تومان.
- سه Variant سایز `80×80`، هرکدام `10,800,000` تومان.
- سه Variant سایز `100×100`، هرکدام `11,800,000` تومان.
- `inventoryPolicy` و `stockQuantity` همه Variantها `null` هستند و Inventory rule هنوز Pending است.
- `combinationKey`ها شناسه فنی داخلی canonical بر پایه size/finish slug هستند و نام یا SKU تجاری محسوب نمی‌شوند.

### Presentations

- سه Presentation متعلق به همان Product ساخته شد؛ هیچ Product یا SKU تکراری ایجاد نشد.
- `تیره + طلایی` با slug داخلی `internal-dark-gold`.
- `تیره + سیلور` با slug داخلی `internal-dark-silver`.
- `تیره + دودی` با slug داخلی `internal-dark-smoke`.
- هر Presentation فقط به Finish Value مربوط متصل است؛ `تیره` به‌عنوان Color Value رسمی ذخیره نشد.
- تعداد ProductImage صفر است و هیچ تصویر یا Asset در Step 12D-1 اضافه نشد.

### Specifications

- ۲۲ Specification رسمی و Admin-driven ثبت شد: خانواده، فرم، برند، طراحی و تولید، نوع، جنس بدنه، رنگ بدنه، جنس اعداد، جنس فریم، ضخامت استیل، فینیش استیل، قابلیت شخصی‌سازی، سبک‌های پیشنهادی، نوع موتور، صدای موتور، نحوه نصب، ضمانت موتور، ضمانت رنگ بدنه، بسته‌بندی، ارسال، کشور تولیدکننده و سازنده.
- مقادیر دقیق از متن تأییدشده User وارد شدند و مشخصات ساعت گرد یا مقدار ساختگی اضافه نشد.

### QA Results

- Prisma format: PASS.
- Prisma validate: PASS.
- Prisma generate با Prisma Client 7.10.0: PASS.
- Migration status: PASS؛ سه Migration و Database schema up to date.
- Migration روی Empty DB: PASS.
- Migration روی Copy واقعی Development DB: PASS.
- SQLite integrity: `ok`.
- SQLite foreign key check: صفر خطا.
- Import idempotency: PASS.
- Product/Option/Variant/Presentation ownership و relation counts: PASS.
- Product SKU null و تمام Variant SKUها null: PASS.
- قیمت‌ها: PASS؛ سه گروه 9,800,000 / 10,800,000 / 11,800,000 و هر گروه سه Variant.
- متن رسمی Product exact-match: PASS.
- نبود `90×90`، Color Value، تصویر و ساعت گرد: PASS.
- Lint: PASS.
- Type Check: PASS.
- Production Build: PASS؛ 67 route بدون خطا تولید شد.

### Pending Decisions

- نام رسمی مدل و Product slug نهایی.
- SKU convention و SKU رسمی Product/Variantها.
- نام‌ها، کدها و Swatchهای رسمی رنگ بدنه.
- وضعیت و قیمت `90×90`.
- Inventory/Made-to-order، Out-of-stock و Preorder behavior.
- تصاویر Product/Presentation/Variant، Alt Text و Production Storage Provider.
- اطلاعات و مدل تجاری ساعت گرد.
- اتصال Runtime Storefront/Cart/Admin به Catalog Database.

------------------------------------------------------------------------

## HANDOFF ARCHIVE — AFTER STEP 12D-1

- **Last Updated:** 2026-10-07
- **Current Phase:** Phase 12 — Real Product & Catalog
- **Current Step:** Step 12D-1 — First Real ARFAM Product Import
- **Current Status:** nullable SKU migration و ورود idempotent ساعت مربع تکمیل، QA و تأیید نهایی شده‌اند؛ آماده Commit/Push با پیام `feat(catalog): import first real ARFAM product`. Step 12D-2 شروع نشده است.
- **Last Approved Commit:** e060cf1a8d661ae03f9a049eae5e14f7849f2788 — feat(catalog): add real product catalog foundation
- **Current Branch:** main
- **Working Tree Status:** فقط تغییرات تأییدشده Step 12D-1 آماده Commit هستند؛ هیچ تصویر یا تغییر Storefront، Cart و Admin در Scope نیست.

### Files Changed

- `prisma/schema.prisma`
- `prisma/migrations/20261007164151_allow_null_catalog_sku/migration.sql`
- `prisma/imports/official-square-wall-clock.mjs`
- `package.json`
- `ARFAM-Gallery-Master-Project-History-FA.md`

### Database State

- Category: 1، Subcategory: 1، Product: 1.
- ProductOption: 2، ProductOptionValue: 6.
- ProductVariant: 9، VariantOptionValue: 18.
- ProductPresentation: 3، PresentationOptionValue: 3.
- ProductSpecification: 22، ProductImage: 0.
- Product SKU و تمام Variant SKUها: `null`.
- Product منتشر نشده است و Storefront همچنان Mock-driven باقی مانده است.

### Known Issues / Preserved Items

- Navigation Freeze همان Known/Intermittent قبلی است و در این Step تغییر نکرد.
- تصاویر هنوز متصل نشده‌اند و ساعت گرد وارد Database نشده است.
- Legacy Product price/stock هنوز برای Migration تدریجی باقی مانده‌اند.
- Password Recovery و Production security pendingهای Phase 11 حفظ شده‌اند.

### Exact NEXT ACTION

- تغییرات تأییدشده Step 12D-1 با پیام `feat(catalog): import first real ARFAM product` روی `main` Commit و به `origin/main` Push شوند.
- پس از Push متوقف شو؛ Step 12D-2 فقط با دستور صریح جداگانه و برای اتصال تصاویر رسمی آغاز شود.

### DO NOT CHANGE

- Storefront، Cart، Checkout، Admin CRUD، Auth، Luxury UI، Logo، Motion و Signature Background.
- متن رسمی Product بدون بازنویسی.
- SKUها تا دریافت مقدار رسمی `null` بمانند.
- برای رنگ بدنه، 90×90، ساعت گرد، Inventory یا Storage Provider داده و Rule اختراع نشود.

### How to Resume

1. `git status` و پنج مسیر Uncommitted ثبت‌شده را بررسی کن.
2. Migration status و Database counts این Handoff را تأیید کن.
3. در صورت نیاز `npm run catalog:import:square-clock` را idempotent اجرا کن.
4. تأیید Commit/Push صادر شده است؛ پس از Push وضعیت clean و sync را گزارش کن.
5. Step 12D-2 را فقط با Assetها و دستور صریح آغاز کن.
------------------------------------------------------------------------

## PHASE 12 — STEP 12D-2 REAL PRODUCT IMAGE IMPORT

### Status

- تاریخ اجرا: 2026-10-07.
- وضعیت: پیاده‌سازی و QA تکمیل شده و در انتظار تأیید Commit/Push است.
- Scope فقط افزودن نوع معنایی `SIZE_GUIDE`، Migration ثبت‌کننده آن، Assetهای واقعی ساعت مربع، Import idempotent تصاویر و مستندات است.
- Storefront، Cart، Checkout، Admin، Auth و داده‌های Product/Variant/Option/Price/SKU تغییر نکردند.

### ProductImageType and Migration

- تصویر راهنمای ابعاد نباید به‌اشتباه `DETAIL` ثبت می‌شد؛ بنابراین با تأیید User مقدار `SIZE_GUIDE` به enum موجود `ProductImageType` افزوده شد.
- Migration جدید: `20261007190000_add_product_image_size_guide_type`.
- SQLite enumهای Prisma را به‌صورت `TEXT` ذخیره می‌کند و ستون `ProductImage.imageType` هیچ `CHECK` constraint محدودکننده‌ای ندارد؛ در نتیجه Migration عمداً additive/no-op است و بدون بازسازی جدول یا تغییر داده، قرارداد Schema را ثبت می‌کند.
- Migration روی دیتابیس خالی، کپی Development DB و سپس Development DB اجرا شد؛ هر چهار Migration applied و Schema up to date است.

### Official Assets

تمام فایل‌ها بدون Crop، تبدیل، ویرایش Background یا تولید تصویر جدید، به‌صورت exact binary copy در مسیر زیر قرار گرفتند:

- `public/media/products/square-wall-clock/square-wall-clock-gold-product.png`
- `public/media/products/square-wall-clock/square-wall-clock-gold-lifestyle.png`
- `public/media/products/square-wall-clock/square-wall-clock-silver-product.png`
- `public/media/products/square-wall-clock/square-wall-clock-silver-lifestyle.png`
- `public/media/products/square-wall-clock/square-wall-clock-smoke-product.png`
- `public/media/products/square-wall-clock/square-wall-clock-smoke-lifestyle.png`
- `public/media/products/square-wall-clock/square-wall-clock-size-guide.png`

SHA-256 هر Source و Destination برابر بود؛ کیفیت، ابعاد و محتوای Assetها تغییر نکرد.

### ProductImage Mapping

- Presentation `internal-dark-gold`: تصویر Product طلایی با `PRODUCT`، primary و position 0؛ تصویر فضای داخلی طلایی با `LIFESTYLE`، non-primary و position 1.
- Presentation `internal-dark-silver`: تصویر Product سیلور با `PRODUCT`، primary و position 0؛ تصویر فضای داخلی سیلور با `LIFESTYLE`، non-primary و position 1.
- Presentation `internal-dark-smoke`: تصویر Product دودی با `PRODUCT`، primary و position 0؛ تصویر فضای داخلی دودی با `LIFESTYLE`، non-primary و position 1.
- راهنمای ابعاد با `SIZE_GUIDE` در سطح Product، بدون `variantId` و `presentationId`، non-primary و position 2 ثبت شد.
- راهنمای ابعاد فقط سایزهای رسمی 65×65، 80×80 و 100×100 سانتی‌متر را نمایش می‌دهد؛ هیچ 90×90 اضافه نشد.
- Alt Textها کوتاه، فارسی و factual هستند و هیچ نام مدل، رنگ بدنه یا ادعای تأییدنشده‌ای به آن‌ها اضافه نشد.

### Idempotent Import

- Import موجود `prisma/imports/official-square-wall-clock.mjs` برای ثبت تصاویر توسعه یافت.
- اجرای `--images-only` فقط تصاویر را ثبت می‌کند تا Product، Variant، Option، Presentation، Specification، Price، SKU و timestampهای آن‌ها تغییر نکنند.
- شناسه‌های پایدار، upsert مشروط و کنترل URL متعارض از ایجاد Duplicate جلوگیری می‌کنند.
- Import دو بار متوالی اجرا شد؛ تعداد تصاویر در هر دو اجرا 7 باقی ماند و Hash کامل ProductImageها در اجرای دوم تغییر نکرد.
- Hash تمام داده‌های Catalog غیرتصویری قبل و بعد از هر دو اجرا یکسان باقی ماند.

### QA Results

- Prisma format: PASS.
- Prisma validate: PASS.
- Prisma generate با Prisma Client 7.10.0: PASS.
- Empty DB migration test: PASS؛ integrity برابر `ok` و foreign key error صفر.
- Development DB copy migration test: PASS؛ integrity برابر `ok` و foreign key error صفر.
- Development migration status: PASS؛ 4 Migration و Database schema up to date.
- ProductImage count: 7؛ شامل 3 `PRODUCT`، 3 `LIFESTYLE` و 1 `SIZE_GUIDE`.
- Primary count: 3؛ دقیقاً Product Shot هر Presentation.
- Variant-level image count: صفر؛ Size Guide نیز Presentation/Variant ندارد.
- Missing URL/Alt Text: صفر.
- Duplicate ID/URL: صفر.
- Asset existence: هر 7 URL معتبر و فایل متناظر موجود است.
- SQLite integrity: `ok`؛ foreign key error صفر.
- Product SKU و هر 9 Variant SKU: `null`.
- قیمت‌ها بدون تغییر: سه Variant با 9,800,000، سه Variant با 10,800,000 و سه Variant با 11,800,000 تومان.
- 90×90 و Color Option: ایجاد نشده‌اند.

### Pending Decisions

- Production Image Storage Provider و چرخه URL/CDN.
- نام رسمی مدل، Product slug نهایی و SKU convention.
- نام‌ها، کدها و Swatchهای رسمی رنگ بدنه.
- وضعیت و قیمت 90×90.
- Inventory/Made-to-order و رفتار Out-of-stock/Preorder.
- اطلاعات و تصاویر ساعت گرد.
- اتصال Runtime Storefront/Cart/Admin به Catalog Database.

------------------------------------------------------------------------

## CURRENT PROJECT STATE / HANDOFF

- **Last Updated:** 2026-10-07
- **Current Phase:** Phase 12 — Real Product & Catalog
- **Current Step:** Step 12D-2 — Real Square Wall Clock Image Import
- **Current Status:** افزودن `SIZE_GUIDE`، Migration، هفت Asset رسمی، Import idempotent و QA تکمیل شده‌اند؛ در انتظار تأیید Commit/Push. اتصال Storefront به Database هنوز شروع نشده است.
- **Last Approved Commit:** d62d2b8d5a6a546d60c49183283992882f6b23e2 — feat(catalog): import first real ARFAM product
- **Current Branch:** main
- **Working Tree Status:** فقط تغییرات Uncommitted مربوط به Step 12D-2 وجود دارد؛ Commit/Push انجام نشده است.

### Files Changed

- `prisma/schema.prisma`
- `prisma/migrations/20261007190000_add_product_image_size_guide_type/migration.sql`
- `prisma/imports/official-square-wall-clock.mjs`
- `public/media/products/square-wall-clock/` — هفت Asset تأییدشده
- `ARFAM-Gallery-Master-Project-History-FA.md`

### Database State

- ProductImage: 7؛ سه Product Shot، سه Lifestyle Shot و یک Size Guide.
- سه Product Shot primary و متصل به Presentation متناظر هستند.
- سه Lifestyle Shot non-primary و متصل به Presentation متناظر هستند.
- Size Guide فقط Product-level، non-primary و بدون Variant/Presentation است.
- داده‌های Step 12D-1 بدون تغییر باقی مانده‌اند: 1 Product، 2 Option، 6 Option Value، 9 Variant، 3 Presentation و 22 Specification.
- Product SKU و تمام Variant SKUها `null` هستند و Product همچنان unpublished است.

### Exact NEXT ACTION

- User باید نتیجه Step 12D-2، Mapping تصاویر و QA را بررسی و تأیید کند.
- پس از تأیید صریح، فقط همین تغییرات Step 12D-2 Commit/Push شوند.
- اتصال Storefront به Catalog Database فقط در Step مستقل بعدی و پس از Commit/Push تأییدشده آغاز شود.

### DO NOT CHANGE

- Storefront، Cart، Checkout، Admin CRUD، Auth، Luxury UI، Logo، Motion و Signature Background.
- Assetهای رسمی، Background و Composition آن‌ها.
- Product/Variant/Option/Price/SKU و متن رسمی Product.
- برای رنگ بدنه، 90×90، ساعت گرد، Inventory یا Storage Provider داده و Rule اختراع نشود.

### How to Resume

1. `git status` و Diff مسیرهای Step 12D-2 را بررسی کن.
2. Migration status و رکوردهای 7 تصویر را دوباره تأیید کن.
3. در صورت تأیید User، تغییرات Step 12D-2 را Commit و Push کن.
4. تا پیش از دستور مستقل، Storefront را به Database متصل نکن و مرحله بعد را شروع نکن.
