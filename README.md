# Get-Gems
Search and transfer Gems<br><br>
index.js — script to search for wallets<br>
transfer.js — script for gem transfer

Example Gem: https://explorer.tonnft.tools/nft/EQD5LNIPAH9DytTkkiw6cwNBfiOIJ4647fD7tACfrKl1ODUz


# Install

1. Скачиваем и устанавливаем Nodejs (https://nodejs.org/en/)
2. Устанавливаем зависимости npm i

# Search
3. Исправляем const seed = hexToBytes (тут ключ который вы нашли на getgems).
4. Запускаем первый скрипт командой node index.js. Получаем список кошельков которым подходит данный приватный ключ.
![IMAGE 2022-05-04 10:09:27](https://user-images.githubusercontent.com/10156691/166636477-ab303118-b7d3-4667-9683-3f4f6426c0e1.jpg)

5. Переходим по ссылкам и ищем кошелек, который имеет "входящие" транзакции.
6. Как нашли транзакцию вводим ее сюда https://explorer.tonnft.tools/nft/(тут адрес).
7. Получаем изображение NFT.
![IMAGE 2022-05-04 10:11:36](https://user-images.githubusercontent.com/10156691/166636695-af0c05f2-7196-4863-bafe-7683e7f29ff2.jpg)

# Tranfer 
8. Вам нужны версия кошелька, приватник с getgems, адрес нфт и адрес куда отправлять. И заменить их по аналогии:
WalletClass - версия кошелька (из пункта 4).
hexToBytes - приватник
nftAddress - адрес NFT
myAddress - адрес куда переместить NFT
9. Запускаем скрипт командой node transfer.js
Примечание: для трансферта на кошельке должно быть 0.05 TON для оплаты транзакции (газа).


