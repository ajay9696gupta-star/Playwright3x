import { test, expect} from '@playwright/test';

test('Context with option', async({browser})=>{
    const context = await browser.newContext({
        viewport: {width: 1920, height: 1080},
        locale: 'fr-FR',
        timezoneId: 'Europe/Paris',
        geolocation: {latitude: 48.8566, longitude: 2.3522},
        permissions: ['geolocation'],
    });
    const page = await context.newPage();
    await page.goto('https://wccqa.on24.com/webcast/login')
    await context.close();
});

test('mobile context', async({browser})=>{
    const iPhone = await browser.newContext({
        viewport: {width: 375, height: 667},
        userAgent: '',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
    });
    const iPhonePage = await iPhone.newPage();
    await iPhonePage.goto('https://wccqa.on24.com/webcast/login')
    await iPhonePage.close();
});