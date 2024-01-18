import { FC } from "react"

type PageProps = {
  params: {
    searchTerm: string
  }
}

type SearchResult = {
  organic_result: {
    position: number
    title: string
    link: string
    thumbnail: string
    snippet: string
  }[]
}

const search = async (searchTerm: string) => {
  const ori: SearchResult["organic_result"] = [
    {
      position: 1,
      title: "title 1",
      link: "link 1",
      thumbnail: "thumbnail 1",
      snippet: "snippet 1",
    },
    {
      position: 2,
      title: "title 2",
      link: "link 2",
      thumbnail: "thumbnail 2",
      snippet: "snippet 2",
    },
  ]

  const data: SearchResult = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        organic_result: ori.filter((ori) => ori.title.includes(searchTerm)),
      })
    }, 1000)
  })

  return data
}

const SearchResults: FC<PageProps> = async ({ params: { searchTerm } }) => {
  const searchResults = await search(searchTerm)
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>

      <ol className="space-y-5 p-5">
        {searchResults.organic_result.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SearchResults
