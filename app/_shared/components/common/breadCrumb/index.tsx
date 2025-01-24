import { useSelector } from "react-redux";
import styles from "./style.module.scss";
import classNames from "classnames";

const BreadCrumb = () => {
  const { breadcrumb: { crumbs } = { crumbs: [] } } = useSelector(
    (state: any) => state.root
  );

  if (!crumbs.length) {
    console.warn("Breadcrumb crumbs are empty or not loaded");
  }

  return (
    <div className="flex items-center">
      {crumbs.map(
        (item: { title: string; action?: () => void }, indx: number) => (
          <div key={indx} className={classNames("flex items-center")}>
            <div
              className={
                crumbs.length === 1
                  ? styles.breadCrumbActive
                  : indx < crumbs.length - 1
                  ? styles.breadCrumbDefault
                  : styles.breadCrumbActive
              }
              onClick={item?.action}
              role="button"
            >
              <h6>{item?.title}</h6>
            </div>
            {crumbs.length - 1 > indx && (
              <span className={styles.breadCrumbSeparator}>{" >> "}</span>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default BreadCrumb;
