import { Tag } from '../models/tag';

export const TAGS: Tag[] =

[
    {id:1,name:"Laravel",slug:"laravel" ,pivot:{projects_id:1,tags_id:1}},
    {id:2,name:"PHP",slug:"php",pivot:{projects_id:1,tags_id:2}},
    {id:3,name:"Docker",slug:"docker" ,pivot:{projects_id:1,tags_id:3}},
]