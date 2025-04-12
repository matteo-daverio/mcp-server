import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  // Naviga alla homepage del server locale React (solitamente su porta 3000)
  await page.goto('http://localhost:3000/');

  // Verifica che il titolo della pagina contenga il nome dell'app
  await expect(page).toHaveTitle(/Microsoft Story/);

  // Verifica che l'elemento principale dell'App sia presente
  await expect(page.locator('.App')).toBeVisible();
});

test('main components are visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Verifica che l'Header sia visibile
  const header = page.locator('header, .header, [data-testid="header"]');
  await expect(header).toBeVisible();

  // Verifica che il Body sia visibile
  const body = page.locator('main, .body, [data-testid="body"]');
  await expect(body).toBeVisible();

  // Verifica che il Footer sia visibile
  const footer = page.locator('footer, .footer, [data-testid="footer"]');
  await expect(footer).toBeVisible();
});

test('layout structure is correct', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Cattura uno screenshot per documentazione o comparazione visiva
  await page.screenshot({ path: 'homepage-screenshot.png' });

  // Verifica l'ordine dei componenti (header deve essere prima del footer)
  const headerBoundingBox = await page.locator('header, .header, [data-testid="header"]').boundingBox();
  const footerBoundingBox = await page.locator('footer, .footer, [data-testid="footer"]').boundingBox();
  
  expect(headerBoundingBox.y).toBeLessThan(footerBoundingBox.y);
});
