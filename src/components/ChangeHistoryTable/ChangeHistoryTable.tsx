import styles from "./ChangeHistoryTable.module.css";

export const ChangeHistoryTable = () => {
  return (
    <div>
      <h1 className={styles.taxonomyHeading}>История построения</h1>
      <table>
        <tr>
          <td>Время</td>
          <td>Событие</td>
          <td>Объект</td>
          <td>Пользователь</td>
          <td>Комментарий</td>
        </tr>
        <tr>
          <td>2022-08-18 10:05:42</td>
          <td>Обновлено</td>
          <td>Ипотека</td>
          <td>ываыва</td>
          <td></td>
        </tr>
        <tr>
          <td>2022-08-18 10:05:42</td>
          <td>Обновлено</td>
          <td>Ипотека</td>
          <td>ываыва</td>
          <td></td>
        </tr>
        <tr>
          <td>2022-08-18 10:05:42</td>
          <td>Обновлено</td>
          <td>Ипотека</td>
          <td>ываыва</td>
          <td></td>
        </tr>
        <tr>
          <td>2022-08-18 10:05:42</td>
          <td>Обновлено</td>
          <td>Ипотека</td>
          <td>ываыва</td>
          <td></td>
        </tr>
        <tr>
          <td>2022-08-18 10:05:42</td>
          <td>Обновлено</td>
          <td>Ипотека</td>
          <td>ываыва</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};
