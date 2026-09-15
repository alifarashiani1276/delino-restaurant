export default function Footer() {
  return (
    // توجه: پس‌زمینه و رنگ متن‌های فوتر عمداً با مقادیر ثابت (نه از طریق
    // کلاس‌های رنگی سفارشی primary/secondary که به تابع withOpacity وابسته‌ن)
    // نوشته شده، چون فوتر همیشه باید تیره بمونه (چه لایت‌مود چه دارک‌مود) و
    // نباید به رنگ زمینه‌ی کلی صفحه وابسته باشه.
    <footer className="w-full bg-[rgb(38,40,47)] text-white flex flex-col items-center pt-8 pb-5 gap-5">
      <div className="w-[90%] flex justify-end">
        <button className="btn btn-outline-invert btn-sm">
          English
          <img src="/images/language.svg" alt="" className="w-4" />
        </button>
      </div>

      <div className="w-[90%] h-px bg-[rgba(255,255,255,0.15)]" />

      <div className="w-[90%] flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logo-footer.png"
              alt="دلینو"
              className="hidden md:block w-10"
            />
            <div className="flex flex-wrap gap-2.5 justify-center">
              {[
                "وبلاگ دلینو",
                "درباره",
                "تماس با ما",
                "قوانین",
                "سوالات متداول",
                "ثبت نام رستوران",
                "حریم شخصی",
              ].map((item) => (
                <p
                  key={item}
                  className="m-0 text-sm text-white whitespace-nowrap"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <p className="text-xs text-[rgb(184,184,184)] text-center md:text-left max-w-md">
            تمامی لوگوها و اطلاعات رستوران‌ها با احترام متعلق به مالکین
            رستوران‌ها است و امتیاز استفاده از این اطلاعات تنها برای دلینو مجاز
            است.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-center md:justify-end gap-5">
            {["telegram", "insta", "linkdin", "aparat", "twiter"].map(
              (icon) => (
                <img
                  key={icon}
                  src={`/images/${icon}.svg`}
                  alt={icon}
                  className="w-5"
                />
              ),
            )}
          </div>
          <div className="flex gap-2.5">
            <img
              src="/images/lable2-aplication.png"
              alt=""
              className="max-w-[150px] rounded-lg border border-[rgba(255,255,255,0.4)]"
            />
            <img
              src="/images/lable4-aplication.png"
              alt=""
              className="max-w-[150px] rounded-lg border border-[rgba(255,255,255,0.4)]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}