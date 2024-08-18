<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Batman',
                'slug' => 'the-batman',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=1O0y2Gc6g1Q',
                'thumbnail' => 'https://i.ytimg.com/vi/1O0y2Gc6g1Q/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => 1
            ],
            [
                'name' => 'The Catman',
                'slug' => 'the-catman',
                'category' => 'Comedy',
                'video_url' => 'https://www.youtube.com/watch?v=1O0y2Gc6g1Q',
                'thumbnail' => 'https://i.ytimg.com/vi/1O0y2Gc6g1Q/maxresdefault.jpg',
                'rating' => 3.5,
                'is_featured' => 0
            ],
            [
                'name' => 'The Catman 2',
                'slug' => 'the-catman2',
                'category' => 'Comedy',
                'video_url' => 'https://www.youtube.com/watch?v=1O0y2Gc6g1Q',
                'thumbnail' => 'https://i.ytimg.com/vi/1O0y2Gc6g1Q/maxresdefault.jpg',
                'rating' => 5.0,
                'is_featured' => 0
            ]
        ];

        Movie::insert($movies);
    }
}
