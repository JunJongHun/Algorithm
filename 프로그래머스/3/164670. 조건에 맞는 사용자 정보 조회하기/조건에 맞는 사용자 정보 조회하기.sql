-- 코드를 입력하세요
SELECT
    U.USER_ID,
    U.NICKNAME,
    CONCAT(CITY,' ',U.STREET_ADDRESS1,' ',U.STREET_ADDRESS2) AS ADDRESS,
    CONCAT(SUBSTR(U.TLNO,1,3),'-',SUBSTR(U.TLNO,4,4),'-',SUBSTR(U.TLNO,8,4)) AS TLNO
FROM
    USED_GOODS_BOARD AS B
JOIN
    USED_GOODS_USER AS U
ON
    B.WRITER_ID = U.USER_ID
GROUP BY U.USER_ID
HAVING COUNT(U.USER_ID) >= 3
ORDER BY U.USER_ID DESC
