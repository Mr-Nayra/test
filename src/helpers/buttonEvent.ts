export const buttonEvent = (btn: string) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    const cookie = localStorage.getItem("cookies");
    if (cookie !== "false") {
      window.gtag("event", "click", {
        button_click: btn,
      });
    }
  }
};
export const buttonEventBlog = (title: string, page: "home" | "blog") => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    const cookie = localStorage.getItem("cookies");
    if (cookie !== "false") {
      if (page === "home") {
        window.gtag("event", "click", {
          READ_MORE_CLICKED_ON_BLOG_FROM_HOMEPAGE: title,
        });
      } else {
        window.gtag("event", "click", {
          READ_MORE_CLICKED_ON_BLOG_FROM_BLOGPAGE: title,
        });
      }
    }
  }
};
