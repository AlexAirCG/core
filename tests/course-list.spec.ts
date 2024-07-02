import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("текст").click();
  await page.getByPlaceholder("текст").fill("hello");
  await page.getByRole("button", { name: "Добавить" }).click();
  await page.getByRole("button", { name: "Удалить" }).click();
});
