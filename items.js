/*
  ✦ 灯芯遊行：限定配件／特殊造型清單 ✦

  新增一項的方法：
    1. 打開灯芯像素工房的自由模式（網址後面加 ?free=1）
    2. 畫配件時先按「清空成透明」，只畫配件的部分（淡淡的灯芯是參考線，不會被存進去）
       畫整隻造型時就整格都畫
    3. 按「複製」拿到咒語，照下面的格式在清單裡加一行
    4. 存檔後，OBS 對灯芯遊行來源按右鍵 →「重新整理」就生效，網址和大家的資料都不會變

  每一項的欄位：
    name  名字（觀眾兌換時要打的字，不能有空格）
    type  '配件'：疊在灯芯上面，可以蓋過外框
          '造型'：整隻換掉，變成完全不一樣的角色
    code  工房自由模式複製出來的咒語
    from  開放兌換的第一天（台灣時間，格式 2026-12-12）
    to    開放兌換的最後一天；兩個都不寫就是隨時可以兌換
          已經拿到的人過期後還是會一直保留

  觀眾在聊天室：
    灯get 名字    兌換（只在開放日期內有效），拿到後會自動戴上
    灯wear 名字   戴上／拿下已經擁有的配件或造型
    灯wear 無     全部拿下
  灯理或管理員在聊天室：
    灯give 觀眾名字 配件名字   直接送給某個人（不受日期限制，適合抽獎）
    灯take 觀眾名字 配件名字   收回

  注意：每一行最後要有逗號，引號要用半形的 '

  ✦ 和工房同步（建議）✦
  把這個檔案也上傳到 GitHub，和工房的 index.html 放在一起，然後把下面那行最前面的 // 刪掉、
  網址換成你的。之後只要改 GitHub 上那一份：工房會顯示配件清單，OBS 也會讀同一份。
  （這台電腦上的這一份就變成備用，GitHub 連不到時才會用它）
*/
// window.AKARI_ITEMS_URL = 'https://你的帳號.github.io/pixel/items.js';
window.AKARI_ITEMS = [
  { name: '聖誕帽',     type: '配件', code: '灯px:BDwsgC3IgCXMJdQgnDw8PDw8PDw8PDwM', from: '2026-12-24', to: '2026-12-25' },
  { name: '小幽靈',     type: '造型', code: '灯px:BDw8ExQjAJcAGwCfABcAgESERIMAFwCARIREgwAXAJ8AFwCCAIHEggCDABcAnwAXAJ8AFwCfABcAnwAXAIMAgwSDAIMAFwQDBAMEAwA8C', from: '2027-10-31', to: '2027-11-1' },
 { name: '便便',     type: '配件', code: '灯px:BDBAIEAUQBhBgEAsQYhAGEAEWBBABEWUQBhgPDw8PDw8PDw8D', from: '2026-11-10', to: '2026-11-10' },
];
