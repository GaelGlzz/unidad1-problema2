export interface BookReference {
    author_key?:          string[];
    author_name?:         string[];
    cover_edition_key?:   string;
    cover_height?:        number;
    cover_i?:             number;
    cover_width?:         number;
    ebook_access?:        string;
    edition_count?:       number;
    first_publish_year?:  number;
    has_fulltext?:        boolean;
    ia?:                  string[];
    ia_collection?:       string[];
    key:                  string;
    language?:            string[];
    lending_edition_s?:   string;
    lending_identifier_s?: string;
    public_scan_b?:       boolean;
    series_key?:          string[];
    series_name?:         string[];
    series_position?:     string[];
    title:                string;
}