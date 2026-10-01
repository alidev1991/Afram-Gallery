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
