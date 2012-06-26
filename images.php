<?php
echo json_encode(ReadFolderDirectory("images"));


function ReadFolderDirectory($dir = "root_dir/here") 
{ 
    $listDir = array(); 
    if($handler = opendir($dir)) { 
        while (($sub = readdir($handler)) !== FALSE) { 
            if ($sub != "." && $sub != ".." && $sub != ".DS_Store" && $sub != "Thumb.db") { 
                if(is_file($dir."/".$sub)) { 
                    $listDir[] = $sub; 
                }elseif(is_dir($dir."/".$sub)){ 
                    $listDir[$sub] = ReadFolderDirectory($dir."/".$sub); 
                } 
            } 
        }    
        closedir($handler); 
    } 
    return $listDir;    
} 
?>