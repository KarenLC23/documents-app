<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfd10aea183af40a2be0a0667bee29859
{
    public static $files = array (
        '8aa33167e2c50c6d2e39a310fb1e1ad9' => __DIR__ . '/..' . '/proesio/pipe/src/PIPE/inicializador.php',
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitfd10aea183af40a2be0a0667bee29859::$classMap;

        }, null, ClassLoader::class);
    }
}
