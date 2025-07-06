## API overview
The MoviesDatabase API provides comprehensive and regularly updated information on over 9 million titles including movies, series, and episodes and 11 million actors and crew members. 

## API Version
Version: Not explicitly stated in the documentation. Assumed versioning is handled via endpoint paths or internal updates.

## Available Endpoints 
- GET /titles - Get multiple titles based on filters like genre, year, etc.

- GET /x/titles-by-ids - Fetch titles using a list of IMDb IDs

- GET /titles/{id} - Retrieve a specific title by its IMDb ID

- GET /titles/{id}/ratings - Get rating and vote count for a title

- GET /titles/x/upcoming - Get upcoming movie and series releases

- GET /titles/series/{id} - Fetch all episodes for a series

- GET /titles/seasons/{id} - Get total number of seasons for a series

- GET /titles/series/{id}/{season} - Get episode IDs for a given season

- GET /titles/episode/{id} - Get details of a single episode

- GET /titles/search/keyword/{keyword} - Search titles by keyword

- GET /titles/search/title/{title} - Search by title or partial title

- GET /titles/search/akas/{aka} - Search titles by their alternative names (exact match only)

- GET /actors - Get a list of actors with pagination

- GET /actors/{id} - Get detailed actor profile by IMDb ID

- GET /title/utils/titleType - List of available title types

- GET /title/utils/genres - List of available genres

- GET /title/utils/lists - Lists for sorting titles (top-rated, popular, etc.)

## Request and Response Format

### Request Example

A typical request to retrieve a movie by IMDb ID:

### Optional Query Parameters

- `info`: Specifies what level of detail to include. Options:
  - `mini_info`
  - `base_info`
  - `image`
  - `creators_directors_writers`
  - `rating`
  - `extendedCast`
  - `awards`
- `limit`: Number of results per page (max 50)
- `page`: Page number for pagination
- `genre`: Filter by genre (case-sensitive, capitalized)
- `year`: Filter by a specific release year
- `startYear` / `endYear`: Filter by year range
- `sort`: Sort results by `year.incr` or `year.decr`
- `list`: Use a predefined list such as:
  - `most_pop_movies`
  - `top_rated_250`
  - `top_boxoffice_200`
  - etc.

## Authentication

> ⚠The API documentation does **not specify any authentication** method such as API keys, OAuth, or tokens.

Assume:
- No authentication is required for public usage.
- If hosted on a platform (e.g., RapidAPI), follow the platform's authentication guide.

## Error Handling

Although not fully documented, expect common HTTP status codes:

| Code | Meaning               | Suggested Action                  |
|------|------------------------|-----------------------------------|
| 400  | Bad Request            | Check your query syntax or parameters |
| 404  | Not Found              | The title or ID doesn't exist     |
| 500  | Internal Server Error  | Retry after some time             |

### Handling Tips:
- Validate inputs before sending requests
- Wrap requests in try-catch blocks or use `.catch()` in JS
- Use fallback messages when data is missing
- Implement retry logic with exponential backoff for 5xx errors

##  Usage Limits and Best Practices
### Usage Limits
- Maximum of **50 results per page** using the `limit` query parameter.
- No specific rate limits documented, but avoid making rapid repeated requests to prevent throttling.

### Best Practices
- Use `mini_info` or `base_info` to reduce response size
- Paginate using `limit` and `page` for large queries
- Filter data using `genre`, `year`, or `titleType` to target specific results
- Use `/title/utils/lists` to display trending or top-rated content
- Batch-fetch titles with `/x/titles-by-ids` for efficiency



