# Example generated docs

This tool helped a lot in creating [this doc](https://www.faststore.dev/reference/api/root-object-fields). Below you can see the input and output from the tool, before I edited and published the content.

## Fields information filled in the spreadsheet:

| Table name          | Field names          | Type                         |
|---------------------|----------------------|------------------------------|
| Search              | productSearchPromise | Promise<ProductSearchResult> |
| Search              | searchArgs           | Omit<SearchArgs, 'type'>     |
| ProductSearchResult | correction           | Correction or undefined      |
| ProductSearchResult | fuzzy                | String                       |
| ProductSearchResult | locale               | String                       |
| ProductSearchResult | operator             | String                       |
| ProductSearchResult | options              | Options                      |
| ProductSearchResult | pagination           | Pagination                   |
| ProductSearchResult | products             | Array of products            |
| ProductSearchResult | query                | String                       |
| ProductSearchResult | recordsFiltered      | Number                       |
| ProductSearchResult | sampling             | Boolean                      |
| ProductSearchResult | translated           | Boolean                      |
| Correction          | misspelled           | Boolean                      |
| Options             | counts               | Array of counts              |
| Options             | sorts                | Array of sorts               |
| Count               | count                | Number                       |
| Count               | proxyURL             | String                       |
| Sort                | active               | Boolean or undefined         |
| Sort                | field                | String                       |
| Sort                | order                | String                       |
| Sort                | proxyURL             | String                       |
| Pagination          | after                | Array of pages               |
| Pagination          | before               | Array of pages               |
| Pagination          | count                | Number                       |
| Pagination          | current              | Page                         |
| Pagination          | first                | Page                         |
| Pagination          | last                 | Page                         |
| Pagination          | next                 | Page                         |
| Pagination          | perPage              | Number                       |
| Pagination          | previous             | Page                         |
| Page                | index                | Number                       |
| Page                | proxyURL             | String                       |
| searchArgs          | count                | Number                       |
| searchArgs          | fuzzy                | String or undefined          |
| searchArgs          | hideUnavailableItems | Boolean or undefined         |
| searchArgs          | page                 | Number                       |

## Output before TW review

```html
### Search
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>productSearchPromise</td>
      <td>Promise<ProductSearchResult></td>
      <td>A promise that returns the result of a product search based on the provided search arguments.</td>
    </tr>
    <tr>
      <td>searchArgs</td>
      <td>Omit<SearchArgs, 'type'></td>
      <td>The search arguments to be used when performing a product search, with the 'type' field omitted.</td>
    </tr>
  </tbody>
</table>


### ProductSearchResult
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>correction</td>
      <td>Correction or undefined</td>
      <td>Specifies whether the search query was corrected or not.</td>
    </tr>
    <tr>
      <td>fuzzy</td>
      <td>String</td>
      <td>Specifies the fuzzy search query used.</td>
    </tr>
    <tr>
      <td>locale</td>
      <td>String</td>
      <td>Specifies the locale used for the search query.</td>
    </tr>
    <tr>
      <td>operator</td>
      <td>String</td>
      <td>Specifies the operator used for the search query.</td>
    </tr>
    <tr>
      <td>options</td>
      <td>Options</td>
      <td>Specifies the search options used.</td>
    </tr>
    <tr>
      <td>pagination</td>
      <td>Pagination</td>
      <td>Specifies the pagination used for the search query.</td>
    </tr>
    <tr>
      <td>products</td>
      <td>Array of products</td>
      <td>Contains an array of products returned by the search query.</td>
    </tr>
    <tr>
      <td>query</td>
      <td>String</td>
      <td>Specifies the search query.</td>
    </tr>
    <tr>
      <td>recordsFiltered</td>
      <td>Number</td>
      <td>Specifies the number of products returned by the search query.</td>
    </tr>
    <tr>
      <td>sampling</td>
      <td>Boolean</td>
      <td>Specifies whether the search query used sampling or not.</td>
    </tr>
    <tr>
      <td>translated</td>
      <td>Boolean</td>
      <td>Specifies whether the search query was translated or not.</td>
    </tr>
  </tbody>
</table>


### Correction
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>misspelled</td>
      <td>Boolean</td>
      <td>A flag indicating whether the word is misspelled or not.</td>
    </tr>
  </tbody>
</table>


### Options
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>counts</td>
      <td>Array of counts</td>
      <td>An array of counts that represent the number of items in a collection or category.</td>
    </tr>
    <tr>
      <td>sorts</td>
      <td>Array of sorts</td>
      <td>An array of sorts that can be applied to a collection or category to change the order in which items are displayed.</td>
    </tr>
  </tbody>
</table>


### Count
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>count</td>
      <td>Number</td>
      <td>The total count of a certain item in the API response.</td>
    </tr>
    <tr>
      <td>proxyURL</td>
      <td>String</td>
      <td>The URL of a proxy server to use for making API requests.</td>
    </tr>
  </tbody>
</table>


### Sort
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>active</td>
      <td>Boolean or undefined</td>
      <td>Indicates if the sort is currently active or not.</td>
    </tr>
    <tr>
      <td>field</td>
      <td>String</td>
      <td>The name of the field to sort by.</td>
    </tr>
    <tr>
      <td>order</td>
      <td>String</td>
      <td>The order in which to sort the field (e.g. "asc" for ascending or "desc" for descending).</td>
    </tr>
    <tr>
      <td>proxyURL</td>
      <td>String</td>
      <td>The URL of the proxy server to use for making the sort request.</td>
    </tr>
  </tbody>
</table>


### Pagination
## Pagination

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>after</td>
      <td>Array of pages</td>
      <td>Array of pages that come after the current page.</td>
    </tr>
    <tr>
      <td>before</td>
      <td>Array of pages</td>
      <td>Array of pages that come before the current page.</td>
    </tr>
    <tr>
      <td>count</td>
      <td>Number</td>
      <td>The total number of pages available.</td>
    </tr>
    <tr>
      <td>current</td>
      <td>Page</td>
      <td>The current page.</td>
    </tr>
    <tr>
      <td>first</td>
      <td>Page</td>
      <td>The first page.</td>
    </tr>
    <tr>
      <td>last</td>
      <td>Page</td>
      <td>The last page.</td>
    </tr>
    <tr>
      <td>next</td>
      <td>Page</td>
      <td>The next page.</td>
    </tr>
    <tr>
      <td>perPage</td>
      <td>Number</td>
      <td>The number of items per page.</td>
    </tr>
    <tr>
      <td>previous</td>
      <td>Page</td>
      <td>The previous page.</td>
    </tr>
  </tbody>
</table>


### Page
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>index</td>
      <td>Number</td>
      <td>The index of the element in the array.</td>
    </tr>
    <tr>
      <td>proxyURL</td>
      <td>String</td>
      <td>The URL of the proxy server to be used.</td>
    </tr>
  </tbody>
</table>


### searchArgs
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>count</td>
      <td>Number</td>
      <td>The number of items to return in the search result.</td>
    </tr>
    <tr>
      <td>fuzzy</td>
      <td>String or undefined</td>
      <td>A string used for fuzzy search matching.</td>
    </tr>
    <tr>
      <td>hideUnavailableItems</td>
      <td>Boolean or undefined</td>
      <td>A boolean value to indicate whether to hide unavailable items in the search result.</td>
    </tr>
    <tr>
      <td>page</td>
      <td>Number</td>
      <td>The page number of the search result.</td>
    </tr>
  </tbody>
</table>
```
