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
![1](https://user-images.githubusercontent.com/10156691/166644593-1f1bcb63-781d-4095-aafb-c867125d97a7.jpg)

5. Переходим по ссылкам и ищем кошелек, который имеет "входящие" транзакции.
6. Как нашли транзакцию вводим ее сюда https://explorer.tonnft.tools/nft/(тут адрес).
7. Получаем изображение NFT.
<img width="1636" alt="2 (1)" src="https://user-images.githubusercontent.com/10156691/166644511-374d0397-82df-4301-aae5-4f3cb9edfbd3.png">

# Tranfer 
8. Вам нужны версия кошелька, приватник с getgems, адрес нфт и адрес куда отправлять. И заменить их по аналогии:<br>
WalletClass - версия кошелька (из пункта 4).<br>
hexToBytes - приватник<br>
nftAddress - адрес NFT<br>
myAddress - адрес куда переместить NFT<br>
9. Запускаем скрипт командой node transfer.js<br>
Примечание: для трансферта на кошельке должно быть 0.05 TON для оплаты транзакции (газа).


