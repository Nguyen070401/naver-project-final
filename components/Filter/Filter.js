const styles = {
  wrapper:
    "max-w-7xl mx-auto flex sm:justify-between justify-center items-center p-4",
  groupFilter: "flex  sm:gap-x-4 gap-x-8 ",
  filterContainer: "text-sm ",
  filterContainerNoMoblie: "text-sm sm:flex hidden",
  filterByDate: "sm:flex gap-x-4 hidden items-center",
  selectionFilter: "outline-none",
  defaultOption: "hidden ",
  title: "hidden md:flex",
};
// const listCategory = [];

const categoryList = [
  { id: 1, name: "Desc",value:0 },
  { id: 2, name: "Asc", value:1 },
];

const Filter = ({handleFilterUpdate}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.groupFilter}>
        {/* category filter */}
        <div className={styles.filterContainer}>
          <select className={styles.selectionFilter}>
            <option className={styles.defaultOption}>Category</option>
            {categoryList.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {/* product filter */}
        <div className={styles.filterContainerNoMoblie}>
          <select className={styles.selectionFilter}>
            <option className={styles.defaultOption}>Product Type</option>

            {categoryList.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {/*  price filter */}
        <div className={styles.filterContainer}>
          <select className={styles.selectionFilter} onChange={(e)=>{handleFilterUpdate(e.target.value)}}>
            <option className={styles.defaultOption}>Price</option>
            {categoryList.map((item) => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {/*  brand filter*/}
        <div className={styles.filterContainerNoMoblie}>
          <select className={styles.selectionFilter}>
            <option className={styles.defaultOption}>Brand</option>
            {categoryList.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.filterByDate}>
        <div className={styles.title}>Sorting by: </div>
        {/*  date added filter*/}
        <div className={styles.filterContainer}>
          <select className={styles.selectionFilter}>
            <option className={styles.defaultOption}>Date Added</option>
            {categoryList.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default Filter;
