<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductWareHouse extends Model
{
    protected $table = 'product_warehouse';

    protected $fillable = [
        'product_id', 'warehouse_id', 'qte','manage_stock'
    ];

    protected $casts = [
        'product_id' => 'integer',
        'warehouse_id' => 'integer',
        'manage_stock' => 'integer',
        'qte' => 'double',
    ];

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function productVariant()
    {
        return $this->belongsTo(ProductVariant::class);
    }

}
