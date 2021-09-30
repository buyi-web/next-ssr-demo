export default props => {
    console.log(props);
    return <h1>电影详情页, id:{props.router.query.id}</h1>;
};
