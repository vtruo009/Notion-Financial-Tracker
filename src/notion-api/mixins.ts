/**
 * All available property type that an instance of {@link Page} can have
 */
enum PropertyType {
    CHECKBOX = 'checkbox',
    CREATED_BY = 'created_by',
    CREATED_TIME = 'created_time',
    DATE = 'date',
    EMAIL = 'email',
    FILES = 'files',
    FORMULA = 'formula',
    LAST_EDITED_BY = 'last_edited_by',
    LAST_EDITED_TIME = 'last_edited_time',
    MULTI_SELECT = 'multi_select',
    NUMBER = 'number',
    PEOPLE = 'people',
    PHONE_NUMBER ='phone_number',
    RELATION = 'relation',
    ROLLUP = 'rollup',
    RICH_TEXT = 'rich_text',
    SELECT = 'select',
    STATUS = 'status',
    TITLE = 'title',
    URL = 'url',
}


/**
 * All available colors
 */
enum Color {
    BLUE = 'blue',
    BROWN = 'brown',
    DEFAULT = 'defualt',
    GRAY = 'gray',
    GREEN = 'green',
    ORANGE = 'orange',
    PINK = 'pink',
    PURPLE = 'purple',
    RED = 'red',
    YELLOW = 'yellow',
}

/**
 * All available background colors
 */
enum BackgroundColor {
    BLUE_BACKGROUND = 'blue_background',
    BROWN = 'brown_background',
    GRAY = 'gray_background',
    GREEN = 'green_background',
    ORANGE = 'orange_background',
    PINK = 'pink_background',
    PURPLE = 'purple_background',
    RED = 'red_background',
    YELLOW = 'yellow_background',
}

type TextColor = Color | BackgroundColor;

/**
 * Defines the property to be specified in instances of {@link Checkbox}
 */
interface Checkbox {
    checkbox: boolean;
}

/**
 * Defines the properties to be specified in instances of {@link Date}
 */
interface Date {
    date: {
        start: string;
        end?: string;
    }
}

/**
 * Defines the property to be specified in instances of {@link Number}
 */
interface Number {
    number: number;
}

/**
 * Defines the properties to be specified in instances of {@link Select}
 */
interface Select {
    select: {
        name: string;
        color?: Color;
        id?: string;
    }
}

/**
 * Defines the properties to be specified in instances of {@link MultiSelect}
 */
interface MultiSelect {
    multi_select: {
        name: string;
        id?: string;
        color?: Color;
    }
}

/**
 * Defines all valid annotations for {@link RichText}
 */
interface RichTextAnnotation {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: TextColor;
}

/**
 * Defines the properties to be specified in instances of {@link RichText}
 */
interface RichText {
    type: 'text' | 'mention' | 'equation';
    text?: {
        content: string;
        link?: {
            url: URL;
        };
    };
    // mention?: RichTextMention; // TODO
    equation?: {
        expression: string;
    };
    // annotations: RichTextAnnotation; // TODO
    plain_text: string;
    href?: string;
}

interface Title {
    title: RichText[];
}

type PropertyConfig =
    | Checkbox
    | Date
    | Number
    | Select
    | MultiSelect
    | Title;

export interface Page {
    parent: {
        type: 'database_id';
        database_id: string;
    } | {
        type: 'page_id',
        page_id: string;
    }
    properties: PropertyConfig;
}