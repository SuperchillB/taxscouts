export interface BookSearchDTO {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: BookSearchDocsDTO[];
  num_found: number;
  q: string;
  offset: any;
}

export interface BookSearchDocsDTO {
  key: string;
  title: string;
  first_publish_year?: number;
  number_of_pages_median?: number;
  oclc?: string[];
  isbn?: string[];
  ia?: string[];
  cover_edition_key?: string;
  cover_i?: number;
  publisher?: string[];
  author_key?: string[];
  author_name?: string[];
  id_amazon?: string[];
  subject_facet?: string[];
  id_goodreads?: string[];
  id_librarything?: string[];
}

export interface Book extends BookSearchDocsDTO {}

export interface BookSearchPayload {
  query: string;
  fields?: (keyof Partial<BookSearchDocsDTO>)[];
  limit?: number;
  page?: number;
}

export interface BookSearchResult {
  page: number;
  items: BookSearchDocsDTO[];
  totalItems: number;
  size: number;
}

export interface BookDetailsPayload
  extends Pick<BookSearchDocsDTO, 'key' | 'title'> {}

export interface BookDetailsDTO extends BookSearchDocsDTO {
  type?: string;
  seed: string[];
  title_suggest?: string;
  title_sort?: string;
  edition_count?: number;
  edition_key?: string[];
  publish_date?: string[];
  publish_year?: number[];
  lccn?: string[];
  publish_place?: string[];
  contributor?: string[];
  lcc?: string[];
  ddc?: string[];
  last_modified_i?: number;
  ebook_count_i?: number;
  ebook_access?: string;
  has_fulltext?: boolean;
  public_scan_b?: boolean;
  ia_collection?: string[];
  ia_collection_s?: string;
  lending_edition_s?: string;
  lending_identifier_s?: string;
  printdisabled_s?: string;
  ratings_average?: number;
  ratings_sortable?: number;
  ratings_count?: number;
  ratings_count_1?: number;
  ratings_count_2?: number;
  ratings_count_3?: number;
  ratings_count_4?: number;
  ratings_count_5?: number;
  readinglog_count?: number;
  want_to_read_count?: number;
  currently_reading_count?: number;
  already_read_count?: number;
  first_sentence?: string[];
  language?: string[];
  author_alternative_name?: string[];
  person?: string[];
  place?: string[];
  subject?: string[];
  id_abebooks_de?: string[];
  id_alibris_id?: string[];
  id_amazon_ca_asin?: string[];
  id_amazon_co_uk_asin?: string[];
  id_amazon_de_asin?: string[];
  id_amazon_it_asin?: string[];
  id_bodleian__oxford_university?: string[];
  id_british_library?: string[];
  id_british_national_bibliography?: string[];
  id_canadian_national_library_archive?: string[];
  id_depósito_legal?: string[];
  id_google?: string[];
  id_hathi_trust?: string[];
  id_paperback_swap?: string[];
  id_wikidata?: string[];
  ia_loaded_id?: string[];
  ia_box_id?: string[];
  publisher_facet?: string[];
  person_key?: string[];
  place_key?: string[];
  person_facet?: string[];
  _version_?: number;
  place_facet?: string[];
  lcc_sort?: string;
  author_facet?: string[];
  subject_key?: string[];
  ddc_sort?: string;
  time?: string[];
  time_facet?: string[];
  time_key?: string[];
  id_better_world_books?: string[];
}
