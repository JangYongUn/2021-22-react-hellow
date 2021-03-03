/********** APP **********/
const App = (props) => {
	const [query, resultproducts] = useState()

	const commitChange = value => {
		this.setState({
			query: value
			resultProducts: this.state.products.filter(v => v.title.includes(value))
		})
	}

	return(
		<div className="container">
				<TitleBar query={query} className="my-4" />
				<Search onChange={this.commitChange} />
				<Products products={resultProducts} />
		</div>
	)
}


/********** TitleBar **********/



/********** Search **********/



/********** Products **********/



/********** Product **********/




ReactDOM.render(<App />, document.getElementById('app'))