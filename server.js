const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/pay', (req, res) => {
    const { login, region, amount } = req.body;
    const orderNumber = Math.floor(1000 + Math.random() * 9000);
    
    console.log(`[НОВЫЙ ЗАКАЗ #${orderNumber}] Логин: ${login}, Регион: ${region}, Сумма: ${amount}₽. Ожидание перевода...`);
    
    res.json({ 
        success: true, 
        orderNumber: orderNumber,
        phone: "+7 (999) 123-45-67", // Замените на свой номер
        bank: "Т-Банк (Тинькофф)"      // Замените на свой банк
    });
});

app.listen(PORT, () => {
    console.log(`\n🚀 Сервер СБП успешно запущен!`);
    console.log(`📱 Ссылка для тестов: http://localhost:3000\n`);
});
