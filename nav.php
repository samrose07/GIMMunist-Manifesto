<?php
  $pages = scandir('newPages');

  foreach($pages as $page)
  {
    if(in_array($page))
    {
      $link = 'newPages/' . $page;
      $safeName = str_replace('.php','', $page);
      echo'<a href="' . $link . '">' . $safeName . '</a> &nbsp;';
    }
  }
 ?>
